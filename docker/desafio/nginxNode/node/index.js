const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}
const connection = mysql.createConnection(config)
connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }
  console.log('Conectado usando thread ID: ' + connection.threadId)
})

connection.query(
  'CREATE TABLE IF NOT EXISTS people (id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY(id))',
  (err) => {
    if (err) {
      console.error(err)
    }
    console.log('Tabela criada com sucesso')
  }
)

const name = 'Erasmo Full Cycle'
const sql = 'INSERT INTO people(name) VALUES(?)'
const values = [name]
connection.query(sql, values)

const query = 'SELECT * FROM people'

const html = '<header>' +
  '<title> Full Cycle - Desafio Node + Nginx </title>' +
  '</header>' +
  '<h1> Full Cycle Rocks!!' +
  '<span style="font-size:100%;color:red;">&starf;</span>\n</h1> <br> ' +
  '<strong> Lista de nomes cadastrados no banco de dados:</strong> <br>'

  app.get('/', (req, res) => {
    try {
      connection.query(query, (err, results) => {
        if (err) {
          console.error(err)
        }
        res.send(html + results.map((result) =>
          result.name).join('<br>') + '<br>')
      })
    } catch (error) {
      console.error(error)
    }
  })

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})
