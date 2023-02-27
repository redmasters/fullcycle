const express = require('express')
const app = express()
const port = 3000

const config = {
	host: 'db',
	user: 'root',
	password: 'root',
	database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const query = `
INSERT INTO people(nome) value('Carlos');
`
connection.query(query)
connection.end()

const html = '<h1> Full Cycle Rocks!! Faz o L!</h1> <br>' +
	' lista de pessoas: <br>' +


app.get('/', (req, res) => {
	res.send(html)
})


app.listen(port, () => {
	console.log('Rodando na porta ' + port )
})
