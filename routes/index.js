var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/inicio', (req, res, next) => {
    res.render('vista.hbs',
        {
            title: '1ª Vista',
            page: 'Mi primera página',
            layout: 'layout.hbs'
        })
});

router.get('/prueba', (req, res, next) => {
    res.render('prueba.hbs',
        {
            usuarios: [
                {id: 1, name: ' Pablo'},
                {id: 2, name: ' Juan'},
                {id: 3, name: ' Gustavo'}],
            administrador:
                {
                    nombre: 'Pablo',
                    apellidos: 'Adriaensens'
                },
            appName: 'Mi super app'
        })
});

module.exports = router;
