const mysql = require ('mysql')
const connection = mysql.createConnection({

  port: process.env.PORT,
  host:process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE,
  multipleStatements:true

});



module.exports =  {connection: connection}

