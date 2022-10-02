const { app, globalShortcut, shell } = require('electron')
const { clipboard } = require('electron')

app.whenReady().then(() => {
  globalShortcut.register('Command+J', () => {
    const selection = clipboard.readText('selection')
    console.log(`Opening jisho for ${selection}`)
    shell.openExternal(`https://jisho.org/search/${selection}`)
  })
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})