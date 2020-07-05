 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockhain');
const uuid = require('uuid/v4');
const port = process.argv[2] || 3000;
const rp = require('request-promise');

const nodeAddress = uuid().split('-').join('');

const bitcoin = new Blockchain();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// get entire blockchain
app.get('/blockchain', function (req, res) {
	res.send(bitcoin)
});


// create a new transaction
app.post('/transaction', function(req, res) {
	const blockindex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipent)
	res.json({ note: `Transaction will be added in block ${blockindex}`})
});


// broadcast transaction
app.post('/transaction/broadcast', function(req, res) {

});


// mine a block
app.get('/mine', function(req, res) {
	const lastBlock= bitcoin.getLastBlock()
	const previousBlockHash = lastBlock['hash']

	const currentBlockData = {
		transactions: bitcoin.pendingTransactions,
		index: lastBlock['index'] + 1
	}

	const nounce = bitcoin.proofOfwork(previousBlockHash, currentBlockData);
	const blockhash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nounce)

	bitcoin.createNewTransaction(12.5, "00", nodeAddress)
	const newBlock = bitcoin.createNewBlock(nounce, previousBlockHash, blockhash)

	res.json({
		note: "New block mined successfully",
		block: newBlock
	})
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
