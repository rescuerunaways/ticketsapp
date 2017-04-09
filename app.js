var express = require('express');
var ticket = require('./controllers/ticket');


var app = express();

app.get('/ticket/:id?', ticket.one);
app.get('/tickets', ticket.list);


app.use(function (err, req, res, next) {
  res.status(500)
  res.render('Internal server error :( )', { error: err })
})

app.listen(3000, function() {
    console.log('Listening on port 3000!')
})
