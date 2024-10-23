require('dotenv').config()
const express = require('express')
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
      console.log(fields)
      res.status(200).json(recipes)
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

   const query = 'INSERT INTO user_data(name_user, second_name_user, email_user) VALUES (?, ?, ?)'
   const values = [name_user, second_name_user, email_user]
   const query2 = 'INSERT INTO user_login(username, password, fk_user_data) VALUES (?, ?, ?)'


   connection.query(query, values, (err, results) => {
      if (err) {
         console.error('Erro ao inserir dados: ', err);
         return;
      }else{
         let lastInsertedId = results.insertId
         const passwordHash = cryptPassword(password)
         const values2 = [username, passwordHash, lastInsertedId]

         connection.query(query2, values2, (err, results) => {
            if(err){
               console.error('Erro ao inserir dados: ', err);
               return;
            }
         })

         res.status(200).json({ message: 'Usuário inserido com sucesso' })
      }
   })

})

app.get('/login/:username/:password', (req, res) => {
   const { username } = req.params
   const { password } = req.params
   const query = `SELECT * FROM vw_user_data WHERE username = ?`
   const value = [username]

   console.log(username, password)

   connection.query(query, value, (err, result) => {
      if(err){
         return res.status(500).json({ message: err})
      }

      if(result.length === 0){
         console.log('tamanho 0')
         return res.status(404).json({ message: 'Usuário não encontrado' })
      }

      const user = result[0]
      const cryptedPassword = cryptPassword(password)

      if(user.password === cryptedPassword){
         console.log('senha igual')
         return res.status(200).json(user)
      }else{
         console.log('senha n igual')
         return res.status(401).json({ message: 'Senha inválida' })
      }

   })
})

app.listen(port, () => console.log(`Servidor na porta ${port}`))