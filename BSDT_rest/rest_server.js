var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var model = require('./model');

var app = express();

var port = 8000;

model.init(function() {
    console.log('RESTful Service listening in port', port);
    app.listen(port);
});

//MONGOOSE

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method', {methods: ['GET', 'POST']}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
	res.send('Restaurants REST Service\n');
})

app.get('/restaurants', async function(req, res) {
  try{
    let restaurants = await model.list(req.query);
    res.status(200).send(restaurants);
  } catch (err) {
    console.log(err.stack);
    res.status(500).send(err.stack);
  }
});

app.get('/restaurants/:restaurantId', async function(req, res) {
    try{
      let restaurants = await model.read(req.params.restaurantId);
      res.status(200).send(restaurants);
    } catch (err) {
      console.log(err.stack);
      res.status(500).send(err.stack);
    }
});

app.post('/restaurants', async function(req, res) {
    try{
      await model.create(req.body);
      res.status(200).send("Created");
    } catch (err) {
      console.log(err.stack);
      res.status(500).send(err.stack);
    }
});

app.put('/restaurants/:restaurantId', async function(req, res) {
    try{
      await model.update(req.params.restaurantId, req.body);
      res.status(200).send("Updated");
    } catch (err) {
      console.log(err.stack);
      res.status(500).send(err.stack);
    }
});

app.delete('/restaurants/:restaurantId', async function(req, res) {
  try{
    await model.delete(req.params.restaurantId);
    res.status(200).send("Deleted");
  } catch (err) {
    console.log(err.stack);
    res.status(500).send(err.stack);
  }
});

// handle 404 errors
app.use(function(req, res){
    res.status(404).send('Not found');
});
