const express = require('express')
const app = express()
const port = 8080
const faker = require('faker');
faker.seed(43)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
var groceries = [
    'milk',
    'coriander',
    'cucumber',
    'eggplant'
]

app.get('/word/:number_of_words', (req, res) => {
    let params = req.params.number_of_words
    console.log("Params", params)
    let mygroceries = groceries[Math.floor(Math.random() * groceries.length)]
    let randomWord = faker.random.words(params)
    res.send(randomWord + " >>>>" + mygroceries)
})