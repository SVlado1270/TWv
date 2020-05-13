import dotenv from 'dotenv'
import mysql from 'mysql'
export default mysql
dotenv.config()

const connection = mysql.createConnection({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPassword,
  database: process.env.dbName
})

connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message)
  }
  console.log('Connection established')
})

/* const judet = '4721'
const sqlquery = 'SELECT JUDET FROM rata_mai WHERE numar_total_someri = ' + mysql.escape(judet)
*/
var criterii = ['educatie', 'rata', 'varste', 'medii']
var luni = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'septembrie', 'noiembrie', 'decembrie']
var rowsQuery = ''

for (const criteriu of criterii) {
  for (const luna of luni) {
    rowsQuery = connection.query('SELECT * FROM ' + criteriu + '_' + luna)
    for (const row of rowsQuery) {
      row.month // = fct care sa ne returneze indexul lunii -> 1 pt ianuarie de ex
    }
    connection.query('INSERT ROWSQUERY INTO ' + criteriu)
  }
}

/*
connection.query(sqlquery, (error, results, fields) => {
  if (error) {
    return console.error(error.message)
  }
  console.log(results)
}) */

connection.end(function (err) {
  if (err) { return console.log('error: ' + err.message) }
  console.log('closed the db connection')
})
