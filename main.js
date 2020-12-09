const { BrowserWindow, app, ipcMain } = require('electron')
const path = require('path')

let win
const run = async () => {
  console.log('Run at:', Date.now())
  const window = new BrowserWindow({ show: false })
  window.webContents.openDevTools({ mode: 'bottom' })
  window.loadURL(`file://${path.resolve('index.html')}`)
  win = window
  setTimeout(() => {
    if (win === window) {
      console.log('Hanged!')
      win.show()
    }
  }, 5000)
  win.on('close', (event) => {
    // or just let it quit and do with for i in `seq 10000`; do electron ./main.js; done
    // app.quit(); return
    setTimeout(run, 100)
    event.preventDefault()
  })
}

app.on('ready', run)
