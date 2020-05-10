const http = require('http')

const db = ['nume', 'varsta', 'ceva']

async function clientStream (request, encoding = 'utf8') {
  request.setEncoding(encoding)
  return new Promise((resolve, reject) => {
    let totalData = ''
    request.on('error', err => {
      console.error(err)
      reject(err)
    })
      .on('data', dataChunks => {
        totalData += dataChunks
      })
      .on('end', () => {
        // request.body = JSON.parse(totalData)
        resolve(totalData)
      })
  })
}

async function postFunction (request, response) {
  try {
    await clientStream(request)

    /* db.push(request.body)
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(db)) */
    db.push(request.body)
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write(JSON.stringify(db))
    console.log('Success')
    response.end()
  } catch (err) {
    response.writeHead(400, { 'Content-type': 'text/plain' })
    response.write('Invalid request', err.message)
    response.end()
  }
}

const getFunction = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.write(JSON.stringify(db))
  response.end()
}

const deleteFunction = (request, response) => {
  const url = request.url
  const urlQuery = url.split('?')[1]
  const field = urlQuery.split('=')[0]
  const value = urlQuery.split('=')[1]

  if (field === 'id') {
    db.splice(value - 1, 1) // stergem elementul de pe pozitia respectiva, fara sa afecteze restul elementelor sau ordinea 
    response.writeHead(200, { 'Content-type': 'text/plain' })
    response.write('Delete confirmed')
    response.end()
  } else {
    response.writeHead(400, { 'Content-type': 'text/plain' })
    response.write('Invalid Query')
    response.end()
  }
}
const server = http.createServer((request, response) => {
  const url = request.url
  const method = request.method
  console.log(method, url)
  switch (method) {
    case 'POST':
      if (url === '/post') {
        postFunction(request, response)
      }
      break

    case 'GET':
      if (url === '/get') {
        getFunction(request, response)
        console.log(db[1])
      }
      break

    case 'DELETE':
      console.log('deleting stuff')
      deleteFunction(request, response)
      break

    default:
      response.writeHead(400, { 'Content-type': 'text/plain' })
      response.write('Cannot find the URL')
      response.end()
  }
})
server.listen(5000, () => {
  console.log('Server running at Port 5000')
})
