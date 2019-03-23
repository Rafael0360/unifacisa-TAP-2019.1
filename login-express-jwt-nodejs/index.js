console.log("init app ...");
var express = require('express');
var jwt = require('jsonwebtoken');
var jwtPass = require('./constant')
var app = express();
var bodyParser = require('body-parser');
var security = require('./security')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());   



app.get('/about', (req, res) => {
    res.send("This is TAP exercise");
});

app.post('/admin', security.authToken, (req, res) => {
    res.send("Your is admin");
});

app.post('/login', (req, res) => {
    
    if(req.body.username === 'admin' && req.body.password === 'admin') {
        let payload = {
            username: 'admin',
            role: ['admin', 'user'],
            email: 'admin@admin.com'
        };

        var token = jwt.sign({payload}, "test", {
            expiresIn: 300
        }); 

        res.status(200).send({auth: true, token: token});
    
    } else {
        res.status(403).send('invalid login');
    }
}); 


app.listen("4000");



