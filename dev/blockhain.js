const sha256 = require('sha256')
class Blockchain {
  constructor(){
    this.chain = [];
    this.pendingTransactions = []; //pending transactions 

    this.createNewBlock(100, '0', '0')
  }

  createNewBlock(nonce, previousBlockHash, hash){
    //all data will be stored in this lock
    const newBlock = {
      index:this.chain.length + 1, //Block number
      timestamp: Date.now(),
      transactions: this.pendingTransactions, //Get New transactions waiting to be placed into a block
      nonce: nonce, //A proof that we created this block in a legitimate way by using proof of work
      hash: hash, //data from the new block
      previousBlockHash: previousBlockHash
    }

    this.pendingTransactions = [];
    this.chain.push(newBlock)

    return newBlock;
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  createNewTransaction(amount, sender, recipient) {
    const newTransaction = {
      amount: amount,
      sender: sender,
      recipient: recipient
    };

    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index'] + 1;
  }

  hashBlock( previousBlockHash, currentblockData, nonce) {
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentblockData)
    const hash = sha256(dataAsString)
    return hash;
  }

  proofOfwork(previousBlockHash, currentblockData){
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentblockData, nonce)
    while(hash.substring(0,4) !== '0000'){
      nonce++;
      hash = this.hashBlock(previousBlockHash, currentblockData, nonce)
    }
    return nonce;
  }
}

module.exports = Blockchain;