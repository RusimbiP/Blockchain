 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const uuid = require('uuid/v1');
const port = process.argv[2];
const rp = require('request-promise');

const nodeAddress = uuid().split('-').join('');

const bitcoin = new Blockchain();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// get entire blockchain
app.get('/blockchain', function (req, res) {

});


// create a new transaction
app.post('/transaction', function(req, res) {

});


// broadcast transaction
app.post('/transaction/broadcast', function(req, res) {

});


// mine a block
app.get('/mine', function(req, res) {

});


// receive new block
app.post('/receive-new-block', function(req, res) {

});


// register a node and broadcast it the network
app.post('/register-and-broadcast-node', function(req, res) {

});


// register a node with the network
app.post('/register-node', function(req, res) {

});


// register multiple nodes at once
app.post('/register-nodes-bulk', function(req, res) {

});


// consensus
app.get('/consensus', function(req, res) {

});


// get block by blockHash
app.get('/block/:blockHash', function(req, res) { 

});


// get transaction by transactionId
app.get('/transaction/:transactionId', function(req, res) {

});


// get address by address
app.get('/address/:address', function(req, res) {

});


// block explorer
app.get('/block-explorer', function(req, res) {
	
});





app.listen(port, function() {
	console.log(`Listening on port ${port}...`);
});
