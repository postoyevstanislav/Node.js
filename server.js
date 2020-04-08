const http = require('http')

// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end('<h1>Hello from node.js</h1>')
// }).listen(3333)

http.createServer(function(req, res) {
let path = req.url
switch (path) {
    case '/':
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>Hello from node.js</h1>')
        break
    case '/about':
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>About page</h1>')
        break
    default: 
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.end('<h1>Page not found</h1>')
}

    
}).listen(3333)

console.log('Server is started on localhost: 3333; Press Ctrl + C for stop')