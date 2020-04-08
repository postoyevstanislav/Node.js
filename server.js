
// http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.end('<h1>Hello from node.js</h1>')
// }).listen(3333)

// http.createServer(function(req, res) {
// let path = req.url
// switch (path) {
//     case '/':
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         // res.end('<h1>Hello from node.js</h1>')
//         fs.createReadStream(__dirname + '/index.html').pipe(res)
//         break
//     case '/about':
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         // res.end('<h1>About page</h1>')
//         fs.createReadStream(__dirname + '/about.html').pipe(res)
//         break
//     default: 
//         res.writeHead(404, {'Content-Type': 'text/html'})
//         // res.end('<h1>Page not found</h1>')
//         fs.createReadStream(__dirname + '/404.html').pipe(res)
// }

    
// }).listen(3333)











const http = require('http')
// const fs = require('fs')
const port = 3333
const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/index.html')
    })
app.get('/about', function(req,res) {
    res.sendFile(__dirname + '/about.html')
        
        res.render('about', {
            title: 'About page by ejs',
            teamLeads: ['Anna', 'Valik', 'Oleg', 'Artem'],
            emails: 'team@ninja.com',
            phone: '38099911223'
        })
    })
app.get('*', function(req,res) {
    res.sendFile(__dirname + '/404.html')
    })



const requestHandler = (request, response) => {}

const server = http.createServer(app)

server.listen(port, (err) => {
    if(err) {
        return console.log('error: ', err)
    } else {
        console.log('Server is started on localhost: 3333; Press Ctrl + C for stop')
    }
})

