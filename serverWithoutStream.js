const fs = require('fs')
const server = require('http').createServer()

server.on('request', (req, res) => {
  fs.readFile('./big.file', (err, data) => {
    if (err) throw err
    res.write(data)
    res.end();
  })
})

server.listen(8000)