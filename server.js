var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/static', express.static('assets'));

app.get('/', function (req, res) {
    res.render('index', {
        user: 
        {username: "Przemek", password: "1234"}
    });
});

app.get('/auth/google', function (req, res) {
    res.render('aplication');
});

app.listen(3003);

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});