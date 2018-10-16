var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();


// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listen to port
app.listen(3000);



// app.get('/', function(req, res){
//     res.render('index');
// });

// app.get('/contact', function(req, res){    
//     res.render('contact', {qs: req.query});
// });

// app.post('/contact', urlencodedParser, function(req, res){    
//     console.log(req.body);
//     res.render('contact-success', {data: req.body});
// });

// app.get('/profile/:id', function(req, res){
//     var data = {age: 29, job: 'technical', hobbies: ['eating', 'sleeping']};
//     res.render('profile', {person: req.params.id, data: data});
// });