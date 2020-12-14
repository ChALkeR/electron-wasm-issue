const fs = require('fs')
const http = require('http')

const DELAY = 10 // seconds
const PORT = 8080 // 0

const wasm = fs.readFileSync('d3wasm.wasm')
const html = fs.readFileSync('index.html')

http.createServer(async (req, res) => {
  const { url } = req
  if (!url.endsWith('\.wasm')) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html, 'utf-8');
    return
  }
  res.writeHead(200, {
    'Content-Type': 'application/wasm',
  });
  const chunk = 2000000
  res.write(wasm.slice(0, chunk))
  console.log('Response part 1/2 sent, opening devtools will hang')
  setTimeout(() => {
    res.end(wasm.slice(chunk))
    console.log('Response part 2/2 sent, opening devtools is now safe')
  }, DELAY * 1000)
})
.listen(PORT, '127.0.0.1', function () {
  const { address, port } = this.address()
  const url = `http://${address}:${port}/`
  console.log(`Listening on ${url}`)
  console.log(`Try opening devtools on that page! (within ${DELAY} seconds after opening the page)`)
})
