const KEY_CODE_LEFT = 37
const KEY_CODE_RIGHT = 39
const KEY_CODE_SPACE = 32

const GAME_WIDTH = 800
const GAME_HEIGHT = 600

const PLAYER_WIDTH = 20
const PLAYER_MAX_SPEED = 300.0
const LASER_MAX_SPEED_PLAYER = 250.0
const LASER_MAX_SPEED_ENEMY = 150.0
const LASER_COOLDOWN = 0.5

const ENEMIES_PER_ROW = 10
const ENEMY_HORIZONTAL_PADDING = 80
const ENEMY_VERTICAL_PADDING = 70
const ENEMY_VERTICAL_SPACING = 80
const ENEMY_COOLDOWN = 7.5

const $player = document.createElement("img")

let baseScore = 100
let score = 0
let minutes = 0
let seconds = 0
let interval

const GAME_STATE = {
  lastTime: Date.now(),
  leftPressed: false,
  rightPressed: false,
  spacePressed: false,
  playerX: 0,
  playerY: 0,
  playerCooldown: 0,
  lasers: [],
  enemies: [],
  enemyLasers: [],
  gameOver: false
}

function rectsIntersect(r1, r2) {
  return !(
    r2.left > r1.right ||
    r2.right < r1.left ||
    r2.top > r1.bottom ||
    r2.bottom < r1.top
  )
}

function setPosition(el, x, y) {
  el.style.transform = `translate(${x}px, ${y}px)`
}

function clamp(v, min, max) {
  if (v < min) {
    return min
  } else if (v > max) {
    return max
  } else {
    return v
  }
}

function rand(min, max) {
  if (min === undefined) min = 0
  if (max === undefined) max = 1
  return min + Math.random() * (max - min)
}

function createPlayer($container) {
  GAME_STATE.playerX = GAME_WIDTH / 2
  GAME_STATE.playerY = GAME_HEIGHT - 50
  //const $player = document.createElement("img")
  $player.src = "../assets/images/estagio_1.png"
  $player.className = "player"
  $container.appendChild($player)
  setPosition($player, GAME_STATE.playerX, GAME_STATE.playerY)
}

function destroyPlayer($container, player) {
  $container.removeChild(player)
  GAME_STATE.gameOver = true
  const audio = new Audio("../assets/sounds/morte1.mp3")
  audio.volume -= 0.9
  audio.play()
}

function updatePlayer(dt, $container) {
  if (GAME_STATE.leftPressed) {
    GAME_STATE.playerX -= dt * PLAYER_MAX_SPEED
  }
  if (GAME_STATE.rightPressed) {
    GAME_STATE.playerX += dt * PLAYER_MAX_SPEED
  }

  GAME_STATE.playerX = clamp(
    GAME_STATE.playerX,
    PLAYER_WIDTH,
    GAME_WIDTH - PLAYER_WIDTH
  )

  if (GAME_STATE.spacePressed && GAME_STATE.playerCooldown <= 0) {
    createLaser($container, GAME_STATE.playerX, GAME_STATE.playerY)
    GAME_STATE.playerCooldown = LASER_COOLDOWN 
    $player.src = "../assets/images/estagio_1_acao.png"
    $player.className = "player"
  }
  if(!GAME_STATE.spacePressed && GAME_STATE.playerCooldown <= 0){
    $player.src = "../assets/images/estagio_1.png"
    $player.className = "player"
  }
  if (GAME_STATE.playerCooldown > 0) {
    GAME_STATE.playerCooldown -= dt
  }

  const player = document.querySelector(".player")
  setPosition(player, GAME_STATE.playerX, GAME_STATE.playerY)
}

function createLaser($container, x, y) {
  const $element = document.createElement("img")
  $element.src = "../assets/images/projetil_halter.png"
  $element.className = "laser"
  $container.appendChild($element)
  const laser = { x, y, $element }
  GAME_STATE.lasers.push(laser)
  const audio = new Audio("../assets/sounds/projetil.mp3")
  audio.play()
  audio.volume = audio.volume - 0.9
  setPosition($element, x, y)
}

function updateLasers(dt, $container) {
  const lasers = GAME_STATE.lasers
  for (let i = 0; i < lasers.length; i++) {
    const laser = lasers[i]
    laser.y -= dt * LASER_MAX_SPEED_PLAYER
    if (laser.y < 0) {
      destroyLaser($container, laser)
    }
    setPosition(laser.$element, laser.x, laser.y)
    const r1 = laser.$element.getBoundingClientRect()
    const enemies = GAME_STATE.enemies
    for (let j = 0; j < enemies.length; j++) {
      const enemy = enemies[j]
      if (enemy.isDead) continue
      const r2 = enemy.$element.getBoundingClientRect()
      if (rectsIntersect(r1, r2)) {
        //Inimigo tomou hit
        destroyEnemy($container, enemy)
        destroyLaser($container, laser)
        break
      }
    }
  }
  GAME_STATE.lasers = GAME_STATE.lasers.filter(e => !e.isDead)
}

function destroyLaser($container, laser) {
  $container.removeChild(laser.$element)
  laser.isDead = true
}

function createEnemy($container, x, y) {
  const $element = document.createElement("img")
  $element.src = "../assets/images/inimigo_02.png"
  $element.className = "enemy"
  $container.appendChild($element)
  const enemy = {
    x,
    y,
    cooldown: rand(0.5, ENEMY_COOLDOWN),
    $element
  }
  GAME_STATE.enemies.push(enemy)
  setPosition($element, x, y)
}

function updateEnemies(dt, $container) {
  const dx = Math.sin(GAME_STATE.lastTime / 1000.0) * 50
  const dy = Math.cos(GAME_STATE.lastTime / 1000.0) * 10

  const enemies = GAME_STATE.enemies
  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i]
    const x = enemy.x + dx
    const y = enemy.y + dy
    setPosition(enemy.$element, x, y)
    enemy.cooldown -= dt
    if (enemy.cooldown <= 0) {
      createEnemyLaser($container, x, y)
      enemy.cooldown = ENEMY_COOLDOWN
    }
  }
  GAME_STATE.enemies = GAME_STATE.enemies.filter(e => !e.isDead)
}

function destroyEnemy($container, enemy) {
  $container.removeChild(enemy.$element)
  score += baseScore
  div_score.innerText = `Pontuação: ${parseFloat(score.toFixed(2))}`
  enemy.isDead = true
}

function createEnemyLaser($container, x, y) {
  const $element = document.createElement("img")
  $element.src = "../assets/images/projetil_2.png"
  $element.className = "enemy-laser"
  $container.appendChild($element)
  const laser = { x, y, $element }
  GAME_STATE.enemyLasers.push(laser)
  setPosition($element, x, y)
}

function updateEnemyLasers(dt, $container) {
  const lasers = GAME_STATE.enemyLasers
  for (let i = 0; i < lasers.length; i++) {
    const laser = lasers[i]
    laser.y += dt * LASER_MAX_SPEED_ENEMY
    if (laser.y > GAME_HEIGHT) {
      destroyLaser($container, laser)
    }
    setPosition(laser.$element, laser.x, laser.y)
    const r1 = laser.$element.getBoundingClientRect()
    const player = document.querySelector(".player")
    const r2 = player.getBoundingClientRect()
    if (rectsIntersect(r1, r2)) {
      //Player tomou hit
      destroyPlayer($container, player)
      break
    }
  }
  GAME_STATE.enemyLasers = GAME_STATE.enemyLasers.filter(e => !e.isDead)
}

function init() {
  if(!interval){
    interval = setInterval(() => updateTime(), 1000)
  }

  const $container = document.querySelector(".game")
  createPlayer($container)

  const enemySpacing =
    (GAME_WIDTH - ENEMY_HORIZONTAL_PADDING * 2) / (ENEMIES_PER_ROW - 1)
  for (let j = 0; j < 3; j++) {
    const y = ENEMY_VERTICAL_PADDING + j * ENEMY_VERTICAL_SPACING
    for (let i = 0; i < ENEMIES_PER_ROW; i++) {
      const x = i * enemySpacing + ENEMY_HORIZONTAL_PADDING
      createEnemy($container, x, y)
    }
  }
}

function updateTime(){
  seconds++
  if (seconds === 60) {
    seconds = 0
    minutes++
  }

  if(seconds % 2 == 0 ){
    baseScore = Math.max(10, baseScore - (Math.random() * 10))
  }
  

  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes
  let formattedSeconds = seconds < 10 ? "0" + seconds : seconds
  div_stopwatch.innerHTML = `Tempo: ${formattedMinutes}:${formattedSeconds}`
}

function pauseTime(){
  clearInterval(interval)
  interval = null
}

function resetTime(){
  clearInterval(interval)
  seconds = 0
  minutes = 0
  div_stopwatch.innerText = '00:00'
}


function updatePlayerImg(estado){
  if(estado == true){
    $player.src = "../assets/images/estagio_1_acao.png"
    $player.className = "player"
  }else if(estado == false){
    $player.src = "../assets/images/estagio_1.png"
    $player.className = "player"
  }
}

function playerHasWon() {
  return GAME_STATE.enemies.length === 0
}

function update(e) {
  const currentTime = Date.now()
  const dt = (currentTime - GAME_STATE.lastTime) / 1000.0

  if (GAME_STATE.gameOver) {
    document.querySelector(".game-over").style.display = "block"
    return
  }

  if (playerHasWon()) {
    document.querySelector(".next-phase").style.display = "block"
    pauseTime()
    const audio = new Audio("../assets/sounds/som_passafase.mp3")
    audio.volume -= 0.9
    audio.play()
    localStorage.setItem("points", score)
    return
  }

  const $container = document.querySelector(".game")
  updatePlayer(dt, $container)
  updateLasers(dt, $container)
  updateEnemies(dt, $container)
  updateEnemyLasers(dt, $container)

  GAME_STATE.lastTime = currentTime
  window.requestAnimationFrame(update)
}

function onKeyDown(e) {
  if (e.keyCode === KEY_CODE_LEFT) {
    GAME_STATE.leftPressed = true
  } else if (e.keyCode === KEY_CODE_RIGHT) {
    GAME_STATE.rightPressed = true
  } else if (e.keyCode === KEY_CODE_SPACE) {
    GAME_STATE.spacePressed = true
    updatePlayerImg(true)
  }
}

function onKeyUp(e) {
  if (e.keyCode === KEY_CODE_LEFT) {
    GAME_STATE.leftPressed = false
  } else if (e.keyCode === KEY_CODE_RIGHT) {
    GAME_STATE.rightPressed = false
  } else if (e.keyCode === KEY_CODE_SPACE) {
    GAME_STATE.spacePressed = false
    updatePlayerImg(false)
  }
}

init()
window.addEventListener("keydown", onKeyDown)
window.addEventListener("keyup", onKeyUp)
window.requestAnimationFrame(update)
