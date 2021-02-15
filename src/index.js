const http = require('http');
const fs = require('fs')

const port = process.env.PORT || 5000;

http.createServer((req, res) => {
    const fileName = req.url === '/'? '/index.html': req.url;

    fs.readFile(`public${fileName}`, (err, file) => {
        if(err) {
            const errorPage = fs.readFileSync(`public/404.html`)
            res.writeHead(404, {"content-type": "text/html"})
            res.end(errorPage)
        }else {
            res.writeHead(200, {"content-type": "text/html"})
            res.end(file)
        }
    })    

}).listen(port, () => console.log(`Server is running on port ${port}`))