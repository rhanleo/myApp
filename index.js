'use strict'

const express = require('express')
const bodyParser = require('bodyparser')
const request = require('request')

const app = express()

const token = process.env.FB_VERIFY_TOKEN
const access = process.env.FB_ACCESS_TOKEN

app.set('port', (process.env.PORT || 5000))
app.listen(app.get('port'), function(){
	console.log('Running port: ', app.get('port'))
} )

//Allow us to process data
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//Route
app.get('/', function(req, res){
	res.send("Hi Im bot ")
})
app.get('/rhan', function(req, res){
	res.send("Hi Im Bot ")
})


//Facebook
app.get('/webhook/', function(req, res){
	if(req.query['hub.verify_token'] === token){
		res.send(req.query['hub.challenge'])
	}else{
		res.send('Wrong Token')
	}
})











