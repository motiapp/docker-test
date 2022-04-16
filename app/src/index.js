const express = require('express')
const axios = require('axios').default
const app = express()
const port = 3000
const host = '0.0.0.0'

app.use(express.json())

app.get('/', async (req, res) => {
  res.send('Basic hello response.')
})

/* Fetch some Google URL and then respond with text */
app.get('/google', async (req, res) => {
  const url = 'https://news.google.com/rss/search?q=instagram'
  const response = await axios.get(url)
  res.send('Google spoke to me!')
})

/* fetch RSS feed and render it */
app.get('/the-daily', async (req, res) => {
  const url = 'https://rss.art19.com/apology-line'
  const response = await axios.get(url)
  res.send(response.data)
})

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`)
})