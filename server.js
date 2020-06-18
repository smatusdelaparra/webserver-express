const express = require('express')
const app = express();

const hbs = require(__dirname + '/hbs/helper').hbs;

const port = process.env.PORT || 3000;

//Express HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.render(('home'), {
        nombre: 'Seba Matus',
        anio: new Date().getFullYear()
    });
})

app.get('/about', function(req, res) {
    res.render(('about'), {
        nombre: 'Seba Matus',
        anio: new Date().getFullYear()
    });
})

app.listen(port);