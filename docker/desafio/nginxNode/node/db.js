const mysql = require('mysql')

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}

async function connect() {
  if(global.connection && global.connection.state !== 'disconnected')
    return global.connection;

  const connection = await mysql.createConnection(config);
  global.connection = connection;
  return connection;

}

module.exports = { connect }
