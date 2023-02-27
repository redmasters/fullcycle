const express = require('express')
const app = express()
const port = 3000


async function createTable () {
  const db = require('./db')
  const connection = await db.connect();
  const createIfNotExists =
    'CREATE TABLE IF NOT EXISTS people (id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY(id))'
  return await connection.query(createIfNotExists);
}

//
// async function insertPerson (name) {
//   const connection = await connect();
//   const sql = 'INSERT INTO people(name) VALUES(?)'
//   const values = [name]
//   return await connection.query(sql, values);
// }
//
// async function selectPeople () {
//   const connection = await connect();
//
//   const [rows] = await connection.query('SELECT * FROM people')
//   return rows;
// }

createTable().then(r => console.log(r));


const html = '<h1> Full Cycle Rocks!! Faz o L!</h1> <br>' +
  ' lista de pessoas: <br>' +

  app.get('/', (req, res) => {
    res.send(html)
  })

app.listen(port, () => {
  console.log('Rodando na porta ' + port)
})
