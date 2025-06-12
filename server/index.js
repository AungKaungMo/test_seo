const express = require('express')
const path = require('path')
const prerender = require('prerender-node')

const app = express()
const PORT = process.env.PORT || 3000

prerender.set('prerenderToken', 'PW51Sjvr3apidCTksZVE')
app.use(prerender)

app.use((req, res, next) => {
  console.log('Incoming URL:', req.url)
  next()
})

const staticPath = path.join(__dirname, '../client/dist')
app.use(express.static(staticPath))

app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
