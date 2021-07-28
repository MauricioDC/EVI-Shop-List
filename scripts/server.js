const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://hoods:delta1992@cluster0.gvdx5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
app.engine('html', require('ejs').renderFile);

MongoClient.connect(uri, (err, client) => {
    if (err) return console.error(err)
    db = client.db('cluster2')
    app.listen(3000, function () {
        console.log('servidor rodando na porta 3000')
    })

})

app.use(express.static('../scripts/'));

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('index.html')
})

app.post('/show', (req, res) => {
    db.collection('data').insertOne(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('salvo no banco de dados')
        //res.redirect('/')
    })
})

