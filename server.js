'use strict';

const express = require("express")
const path = require("path")
const api = require("./api.js")

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

api(app)

app.listen(process.env.PORT || 8080, () => {
  console.log('Server listening...')
})