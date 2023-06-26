import express from 'express';
import path from 'path';
const __dirname = path.resolve();

const app = express()
app.get('/index.html', (req, res) => {
  res.send("./public/index.html")
})


app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`)
})