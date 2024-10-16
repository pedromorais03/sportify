require('dotenv').config()

const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

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

app.listen(port, () => console.log(`Servidor na porta ${port}`))