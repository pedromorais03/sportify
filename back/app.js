require('dotenv').config()
const express = require('express')
const PDFDocument = require('pdfkit')
const mysql = require('mysql2')
const cors = require('cors')
const { cryptPassword } = require('./plugins/crypto')

const app = express()
const port = process.env.PORT || 3000
const connection = mysql.createConnection({
   host: process.env.DB_HOST,    
   user: process.env.DB_USER,           
   password: process.env.DB_PASSWORD,  
   database: process.env.DB_DATABASE,
   port: 3306
})

app.use(express.json())
app.use(cors())
// app.use('api/')

connection.connect((err) => {
   if (err) {
      console.error('Erro ao conectar ao MySQL: ', err);
      return;
   }
   console.log('Conexão com MySQL estabelecida com sucesso!');
})

app.get('/', (req, res) => {
   let users = []
   connection.query('SELECT * FROM user_data', (err, results, fields) => {
      if(err){
         console.error('Erro ao executar select', err)
         return;
      }

      users = results
      console.log(fields)
      res.status(200).json(users)
   })
})

app.get('/recipes', (req, res) => {
   let recipes = []
   connection.query('SELECT * FROM vw_recipe_user', (err, results, fields) => {
      if(err){
         console.error('Erro ao executar select', err)
         return;
      }

      recipes = results
      res.status(200).json(recipes)
   })
})

app.get('/posts', (req, res) => {
   let posts = []
   connection.query('SELECT * FROM vw_post_user', (err, results, fields) => {
      if(err){
         console.log('Erro ao executar select', err)
         return;
      }

      posts = results
      res.status(200).json(posts)
   })
})

app.post('/recipes', (req, res) => {
   const { title }  = req.body
   const { description } = req.body
   const { ingredients } = req.body
   const { prep_method } = req.body
   const { id_user } = req.body 

   const query = 'INSERT INTO recipes(name_recipe, description, ingredients_recipes, prep_method, fk_user) VALUES (?, ?, ?, ?, ?)'
   const values = [title, description, ingredients, prep_method, Number(id_user)]

   connection.query(query, values, (err, results) => {
      if (err) {
         console.error('Erro ao inserir dados: ', err);
         return;
      }

      res.status(200).json({ message: 'Receita inserida com sucesso' })
   })
})

app.post('/user', (req, res) => {
   const { name_user } = req.body
   const { second_name_user } = req.body
   const { email_user } = req.body
   const { username } = req.body
   const { password } = req.body
   const passwordHash = cryptPassword(password)
   const query = 'CALL p_insert_data_login(?, ?, ?, ?, ?)'
   const values = [name_user, second_name_user, email_user, username, passwordHash]


   connection.query(query, values, (err, results) => {
      if (err) {
         console.error('Erro ao inserir dados: ', err);
         return;
      }else{
         res.status(200).json({ message: 'Usuário inserido com sucesso' })
      }
   })

})

app.post('/posts', (req, res) => {
   const { title } = req.body
   const { content } = req.body
   const { id_user } = req.body 

   const query = 'INSERT INTO posts VALUES(?, ?, ?)'
   const values = [title, content, id_user]

   connection.query(query, values, values, (err, results) => {
      if(err){
         console.log('Erro ao inserir post', err)
         return
      }else{
         res.status.json({ message: 'Post inserido com sucesso' })
      }
   })
})

app.get('/login/:username/:password', (req, res) => {
   const { username } = req.params
   const { password } = req.params
   const query = `SELECT * FROM vw_user_data WHERE username = ?`
   const value = [username]

   connection.query(query, value, (err, result) => {
      if(err){
         return res.status(500).json({ message: err})
      }

      if(result.length === 0){
         return res.status(404).json({ message: 'Usuário não encontrado' })
      }

      const user = result[0]
      const cryptedPassword = cryptPassword(password)

      if(user.password === cryptedPassword){
         return res.status(200).json(user)
      }else{
         return res.status(401).json({ message: 'Senha inválida' })
      }

   })
})

app.post('/game', (req, res) => {
   const { score }  = req.body
   const { id_user } = req.body
   const { id_game } = req.body

   const query = 'INSERT INTO run_data VALUES (default, ?, ?, ?, default)'
   const values = [score, id_user, id_game]

   connection.query(query, values, (err, results) => {
      if (err) {
         console.error('Erro ao inserir dados: ', err);
         return;
      }

      res.status(200).json({ message: 'Resultado do jogo inserido com sucesso' })
   })
})

app.get('/rankings', (req, res) => {
   const query = `
                  SELECT 
	                  CONCAT(ud.name_user, ' ', ud.second_name_user) AS name_user,
                     rd.score,
                     rd.dt_run
                  FROM run_data AS rd
                  JOIN user_data AS ud
                  ON rd.fk_user = ud.id_user
                  ORDER BY rd.score DESC;
                 `

   connection.query(query, (err, results) => {
      if (err) {
         console.error('Erro ao inserir dados: ', err);
         return;
      }

      res.status(200).json(results)
   })
})

app.post('/recipes/download', (req, res) => {
   console.log(req.body)
   const { pages } = req.body
   const doc = new PDFDocument()
   res.setHeader('Content-Type', 'application/pdf')
   res.setHeader('Content-Disposition', 'attachment; filename="book.pdf"')

   doc.pipe(res)

   doc.fontSize(18).text('Teste', {align: 'center'}).moveDown()

   pages.forEach((item, index) => {
      // doc.fontSize(12).text(`Item ${index + 1}:`);

      Object.entries(item).forEach(([key, value]) => {
          doc.text(`${key}: ${value}`)
         // console.log(key, value)
      })

      doc.moveDown()
      // console.log(item, index)
   })

   doc.end()
})

app.listen(port, () => console.log(`Servidor na porta ${port}`))