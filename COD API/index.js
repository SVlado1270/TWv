const http = require('http');
const mysql = require('mysql')
require('dotenv').config()

const connection = mysql.createConnection({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPassword,
    database: process.env.dbName
})

connection.connect(function (err) {
    if (err) {
        console.log('error: ' + err.message)
    }
    console.log('Connection established')
})

/*const server = http.createServer((request, response) => {
    if(request.url === '/test')
    {
        response.writeHead(200, {'Content-Type': 'application/json'});
        
        var string = "HELLO";
        var obj = {
            name: 'Vlad'
        };
        response.send(obj);
    }
    
});*/

var server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);

    // incarcare pagini

    if(req.url === '/IASI'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Iasi'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/BACAU'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Bacau'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/BOTOSANI'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Botosani'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/SUCEAVA'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Suceava'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/NEAMT'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Neamt'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/VASLUI'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Vaslui'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/GALATI'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Galati'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/VRANCEA'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Vrancea'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/BRAILA'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Braila'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/TULCEA'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Tulcea'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/CONSTANTA'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Constanta'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/IALOMITA'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Ialomita'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/CALARASI'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Calarasi'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/BUZAU'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Buzau'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/GIURGIU'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Giurgiu'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/ILFOV'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Ilfov'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/BUCURESTI'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Bucuresti'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/PRAHOVA'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Prahova'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/BRASOV'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Brasov'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/COVASNA'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Covasna'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/HARGHITA'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Harghita'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/TELEORMAN'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Teleorman'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/DAMBOVITA'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Dambovita'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/MURES'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Mures'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/BISTRITA'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Bistrita Nasaud'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/MARAMURES'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Maramures'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/SATUMARE'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Satu-Mare'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/SALAJ'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Salaj'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/CLUJ'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Cluj'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/ALBA'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Alba'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/SIBIU'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Sibiu'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/VALCEA'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Valcea'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/ARGES'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Arges'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/OLT'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Olt'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/DOLJ'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Dolj'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/MEHEDINTI'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Mehedinti'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/GORJ'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Gorj'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/BIHOR'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Bihor'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/ARAD'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Arad'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/TIMIS'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Timis'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/HUNEDOARA'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Hunedoara'
        }
        res.end(JSON.stringify(obj));
    }

    if(req.url === '/CARAS'){
        res.writeHead(200,{'Content-type': 'application/json'});
        var obj = {
            Judet: 'Caras'
        }
        res.end(JSON.stringify(obj));
    }

    var criterii = ['educatie', 'varste', 'rata', 'medii']
  var judete = ['IASI', ' IASI', 'BOTOSANI', ' BOTOSANI', 'BACAU', ' BACAU', 'VASLUI', ' VASLUI', 'GALATI', ' GALATI', 'TULCEA', ' TULCEA', 'CONSTANTA', ' CONSTANTA', 'IALOMITA', ' IALOMITA', 'BRAILA', ' BRAILA', 'VRANCEA', ' VRANCEA', 'NEAMT', ' NEAMT', 'SUCEAVA', ' SUCEAVA', 'BISTRITA', ' BISTRITA', 'MARAMURES', ' MARAMURES', 'MURES', ' MURES', 'HARGHITA', ' HARGHITA', 'COVASNA', ' COVASNA', 'BUZAU', ' BUZAU', 'PRAHOVA', ' PRAHOVA', 'ILFOV', 'DAMBOVITA', ' DAMBOVITA', 'BRASOV', ' BRASOV', 'GIURGIU', ' GIURGIU', 'TELEORMAN', ' TELEORMAN', 'OLT', ' OLT', 'DOLJ', ' DOLJ', 'ALBA', ' ALBA', 'MEHEDINTI', ' MEHEDINTI', 'VALCEA', ' VALCEA', 'ARGES', ' ARGES', 'SIBIU', ' SIBIU', 'CLUJ', ' CLUJ', 'SALAJ', ' SALAJ', 'BIHOR', ' BIHOR', 'ARAD', 'ARAD', 'TIMIS', ' TIMIS', 'CARAS', ' CARAS', 'HUNEDOARA', 'HUNEDOARA']
  for (var criteriu of criterii) {
    for (var judet of judete) {
      if (req.url === '/' + judet + '/' + criteriu) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        var temp = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet)

        connection.query(temp, (err, results, fields) => {
          if (err) throw err
          var test = JSON.stringify(results)
          var rez = JSON.parse(test)
          res.end(JSON.stringify(rez))
        })
      }
    }
  }
  for (criteriu of criterii) {
    if (req.url === '/BUCURESTI/' + criteriu) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      var judet1 = 'BUCURESTI'
      var judet2 = ' BUCURESTI'
      var judet3 = 'MUN.BUC.'
      var judet4 = 'Municipiul BUCURESTI'
      var judet5 = 'MUNICIPIUL BUCURESTI'
      var judet6 = 'MUN. BUC.'
      var temp2 = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet1) + ' OR JUDET = ' + mysql.escape(judet2) + ' OR JUDET = ' + mysql.escape(judet3) + ' OR JUDET = ' + mysql.escape(judet4) + ' OR JUDET = ' + mysql.escape(judet5) + ' OR JUDET = ' + mysql.escape(judet6)

      connection.query(temp2, (err, results, fields) => {
        if (err) throw err
        var test = JSON.stringify(results)
        var rez = JSON.parse(test)
        res.end(JSON.stringify(rez))
      })
    } else if (req.url === '/SATUMARE/' + criteriu) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      var judet8 = 'SATU MARE'
      var judet9 = 'SATU M.'
      var temp3 = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet8) + ' OR JUDET = ' + mysql.escape(judet9)

      connection.query(temp3, (err, results, fields) => {
        if (err) throw err
        var test = JSON.stringify(results)
        var rez = JSON.parse(test)
        res.end(JSON.stringify(rez))
      })
    } else if (req.url === '/CARAS/educatie') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      var judet10 = ' CARAS-SEVERIN'
      var judet11 = 'CARAS - SEVERIN'
      var judet12 = 'CARAS'
      var judet13 = ' CARAS'
      var temp4 = 'SELECT * FROM educatie WHERE JUDET = ' + mysql.escape(judet10) + ' OR JUDET = ' + mysql.escape(judet11) + ' OR JUDET = ' + mysql.escape(judet12) + ' OR JUDET = ' + mysql.escape(judet13)

      connection.query(temp4, (err, results, fields) => {
        if (err) throw err
        var test = JSON.stringify(results)
        var rez = JSON.parse(test)
        res.end(JSON.stringify(rez))
      })
    }
  }

    if (req.url === '/Regiune/nordest') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['IASI', 'VASLUI', 'BACAU', 'BOTOSANI', 'NEAMT', 'SUCEAVA', ' IASI', ' VASLUI', ' BACAU', ' BOTOSANI', ' NEAMT', ' SUCEAVA']
        var temp = 'SELECT luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' OR JUDET = ' + mysql.escape(judete[2]) + ' OR JUDET = ' + mysql.escape(judete[3]) + ' OR JUDET = ' + mysql.escape(judete[4]) + ' OR JUDET = ' + mysql.escape(judete[5]) + ' OR JUDET = ' + mysql.escape(judete[6]) + ' OR JUDET = ' + mysql.escape(judete[7]) + ' OR JUDET = ' + mysql.escape(judete[8]) + ' OR JUDET = ' + mysql.escape(judete[9]) + ' OR JUDET = ' + mysql.escape(judete[10]) + ' OR JUDET = ' + mysql.escape(judete[11])
        
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }
    
    if (req.url === '/Regiune/nordvest') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['BIHOR', 'CLUJ', 'SALAJ', 'SATU MARE', 'MARAMURES', 'BISTRITA - NASAUD', ' BIHOR', ' CLUJ', ' SALAJ', ' SATU MARE', ' MARAMURES', ' BISTRITA-NASAUD']
        var temp = 'SELECT luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' OR JUDET = ' + mysql.escape(judete[2]) + ' OR JUDET = ' + mysql.escape(judete[3]) + ' OR JUDET = ' + mysql.escape(judete[4]) + ' OR JUDET = ' + mysql.escape(judete[5]) + ' OR JUDET = ' + mysql.escape(judete[6]) + ' OR JUDET = ' + mysql.escape(judete[7]) + ' OR JUDET = ' + mysql.escape(judete[8]) + ' OR JUDET = ' + mysql.escape(judete[9]) + ' OR JUDET = ' + mysql.escape(judete[10]) + ' OR JUDET = ' + mysql.escape(judete[11])
        
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }

    if (req.url === '/Regiune/bucilfov') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['BUCURESTI', 'ILFOV', ' ILFOV']
        var temp = 'SELECT luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' OR JUDET = ' + mysql.escape(judete[2]);
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }
    
    if (req.url === '/Regiune/centru') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['ALBA', 'BRASOV', 'COVASNA', 'HARGHITA', 'MURES', 'SIBIU', ' ALBA', ' BRASOV', ' COVASNA', ' HARGHITA', ' MURES', ' SIBIU']
        var temp = 'SELECT luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' OR JUDET = ' + mysql.escape(judete[2]) + ' OR JUDET = ' + mysql.escape(judete[3]) + ' OR JUDET = ' + mysql.escape(judete[4]) + ' OR JUDET = ' + mysql.escape(judete[5]) + ' OR JUDET = ' + mysql.escape(judete[6]) + ' OR JUDET = ' + mysql.escape(judete[7]) + ' OR JUDET = ' + mysql.escape(judete[8]) + ' OR JUDET = ' + mysql.escape(judete[9]) + ' OR JUDET = ' + mysql.escape(judete[10]) + ' OR JUDET = ' + mysql.escape(judete[11])
        
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }
    
    if (req.url === '/Regiune/vest') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['ARAD', 'CARAS-SEVERIN', 'HUNEDOARA', 'TIMIS', ' ARAD', ' CARAS', ' HUNEDOARA', ' TIMIS', ' CARAS-SEVERIN', 'CARAS - SEVERIN']
        var temp = 'SELECT luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' OR JUDET = ' + mysql.escape(judete[2]) + ' OR JUDET = ' + mysql.escape(judete[3]) + ' OR JUDET = ' + mysql.escape(judete[4]) + ' OR JUDET = ' + mysql.escape(judete[5]) + ' OR JUDET = ' + mysql.escape(judete[6]) + ' OR JUDET = ' + mysql.escape(judete[7]) + ' OR JUDET = ' + mysql.escape(judete[8]) + ' OR JUDET = ' + mysql.escape(judete[9])
        
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }
    
    if (req.url === '/Regiune/sudvest') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['DOLJ', 'GORJ', 'MEHEDINTI', 'OLT', 'VALCEA', ' DOLJ', ' GORJ', ' MEHEDINTI', ' OLT', ' VALCEA']
        var temp = 'SELECT luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' OR JUDET = ' + mysql.escape(judete[2]) + ' OR JUDET = ' + mysql.escape(judete[3]) + ' OR JUDET = ' + mysql.escape(judete[4]) + ' OR JUDET = ' + mysql.escape(judete[5]) + ' OR JUDET = ' + mysql.escape(judete[6]) + ' OR JUDET = ' + mysql.escape(judete[7]) + ' OR JUDET = ' + mysql.escape(judete[8]) + ' OR JUDET = ' + mysql.escape(judete[9])
        
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }
    
    if (req.url === '/Regiune/sud') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['ARGES', 'CALARASI', 'DAMBOVITA', 'GIURGIU', 'IALOMITA', 'PRAHOVA', 'TELEORMAN', ' ARGES', ' CALARASI', ' DAMBOVITA', ' GIURGIU', ' IALOMITA', ' PRAHOVA', ' TELEORMAN']
        var temp = 'SELECT luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' OR JUDET = ' + mysql.escape(judete[2]) + ' OR JUDET = ' + mysql.escape(judete[3]) + ' OR JUDET = ' + mysql.escape(judete[4]) + ' OR JUDET = ' + mysql.escape(judete[5]) + ' OR JUDET = ' + mysql.escape(judete[6]) + ' OR JUDET = ' + mysql.escape(judete[7]) + ' OR JUDET = ' + mysql.escape(judete[8]) + ' OR JUDET = ' + mysql.escape(judete[9]) + ' OR JUDET = ' + mysql.escape(judete[10]) + ' OR JUDET = ' + mysql.escape(judete[11]) + ' OR JUDET = ' + mysql.escape(judete[12]) + ' OR JUDET = ' + mysql.escape(judete[13])
        
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }
    
    if (req.url === '/Regiune/sudest') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        var judete = ['BRAILA', 'BUZAU', 'CONSTANTA', 'GALATI', 'TULCEA', 'VRANCEA', ' BRAILA', ' BUZAU', ' CONSTANTA', ' GALATI', ' TULCEA', ' VRANCEA']
        var temp = 'SELECT judet, luna, an, NUMAR_TOTAL_SOMERI FROM medii WHERE JUDET = ' + mysql.escape(judete[0]) + ' OR JUDET = ' + mysql.escape(judete[1]) + ' OR JUDET = ' + mysql.escape(judete[2]) + ' OR JUDET = ' + mysql.escape(judete[3]) + ' OR JUDET = ' + mysql.escape(judete[4]) + ' OR JUDET = ' + mysql.escape(judete[5]) + ' OR JUDET = ' + mysql.escape(judete[6]) + ' OR JUDET = ' + mysql.escape(judete[7]) + ' OR JUDET = ' + mysql.escape(judete[8]) + ' OR JUDET = ' + mysql.escape(judete[9]) + ' OR JUDET = ' + mysql.escape(judete[10]) + ' OR JUDET = ' + mysql.escape(judete[11]) + ' ORDER BY luna'
        
        connection.query(temp, (err, results, fields) => {
            if (err) throw err
            var test = JSON.stringify(results)
            var rez = JSON.parse(test)
            //getFunction(request, response, rez)
            res.end(JSON.stringify(rez));
        })
    }
    
    
    
})

var port = process.env.PORT;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
