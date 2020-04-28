const mysql = require('mysql')

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
connection.query(sqlquery, (error, results, fields) => {
  if (error) {
    return console.error(error.message)
  }
  console.log(results)
})

const http = require('http')
const querystring = require('querystring')
const server = http.createServer()
var handler = require('./handler')
var url = require('url')
var utils = ('./utilities')
var routes = {
  '/': handler
}

server.on('request', function (req, res) {
  var parts = url.URL(req.url)
  var route = routes[parts.pathname]

  if (route) {
    route(req, res)
  } else {
    utils.sendResponse(res, 'Not found', 404)
  }
  if (req.method === 'PUT') {
    var body = ''
    req.on('data', function (data) { body += data })
    req.on('end', function () {
      var PUT = querystring.parse(body)
      console.log(PUT)
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.write('\n[request received successfully]\n')
      res.send(JSON.stringify({ status: 201, error: null, response: 'it good' }))
      res.end()
      console.log('PUT METHOD')
    })
  } else if (req.method === 'GET') {
    res.locals.connection.query('SELECT * from rata_mai', function (error, results, fields) {
      if (error) throw error
      res.send(JSON.stringify({ status: 200, error: null, response: 'SELECT * from rata_mai' }))
    })
  } else { res.end() }
}).listen(5500)

connection.end(function (err) {
  if (err) { return console.log('error: ' + err.message) }
  console.log('closed the db connection')
})
server.close()
// console.log('closed server')
