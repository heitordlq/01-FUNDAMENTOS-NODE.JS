const http = require('http')

const server = http.createServer((req,res) => {  
    return res.end('Hello Words')  
})

server.listen(3333)