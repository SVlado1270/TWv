import mysql from 'mysql'
export default mysql

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'student',
  database: 'twdb'
})

connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message)
  }
  console.log('Connection established')
})

const judet = 'IASI'
const sqlquery = 'SELECT `numar total someri` FROM rata_mai WHERE JUDET= ' + mysql.escape(judet)
// var luna = ''
/* const rataQuery = 'SELECT * FROM rata WHERE LUNA = ' + mysql.escape(luna)
const varstaQuery = 'SELECT * FROM varsta WHERE LUNA = ' + mysql.escape(luna)
const educatieQuery = 'SELECT * FROM educatie WHERE LUNA = ' + mysql.escape(luna)
const sexQuery = 'SELECT * FROM sex WHERE LUNA = ' + mysql.escape(luna) */
connection.query(sqlquery, (error, results, fields) => {
  if (error) {
    return console.error(error.message)
  }
  console.log(results)
})

connection.end(function (err) {
  if (err) { return console.log('error: ' + err.message) }
  console.log('closed the db connection')
})
