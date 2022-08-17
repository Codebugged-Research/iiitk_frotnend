require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

const posts = [
    {
        email: "another@example.com",
        password: "d1r3ctu5",
        role: "2849b08d-be44-4562-83b7-94856c099e88"
    },
    {
        email: "another2@example.com",
        password: "d1r3ciu5",
        role: "2849b08d-be44-4562-83b7-94856c099e88"
    },

]

app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username === req.user.name))
  res.json(posts.filter(post => post.password === req.user.password))
  res.json(posts.filter(post => post.role === req.user.role))
})

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

app.listen(3000)