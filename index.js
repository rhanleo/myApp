'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.set('port', (process.env.PORT || 5000));

//Allow us to process data
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Route
app.get('/', function(req, res){
	res.send('Hi I\'m a chatbotv1.. ');
});

//Facebook
app.get('/webhook', function(req, res){
	if(req.query['hub.verify_token'] === 'rhanbarredo123!'){
		res.send(req.query['hub.challenge']);
	}else{
		res.send('Wrong Token');
	}
});
app.listening(app.get('port'), function(){
	console.log('running: port');
})