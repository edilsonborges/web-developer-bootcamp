var app = require('express')()
var request = require('request')
app.set('view engine', 'ejs')

app.get('/', function(req, res){
    res.render('search')
})

app.get('/results', function(req, res){
    var term = req.query.search
    var url = 'http://www.omdbapi.com/?s='+term+'&apikey=thewdb';
    request(url, function(error, response, body){
        if (!error &&response.statusCode == 200 ) {
                var data = JSON.parse(body)
                res.render('results', {data: data})
        }
    })
})

app.listen('3000', function(){
    console.log('server started')
})
