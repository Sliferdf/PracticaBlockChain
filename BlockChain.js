const Block = require('./block')

class BlockChain{
    constructor(){
        this.chain= [this.createBlockGen()]
        this.dificult = 3
    }

    createBlockGen(){
        return new Block('01/01/2019', 'Bloque génesis', '0')
    }

    getUltimoBlock(){
        return this.chain[this.chain.length-1]
    }

    pushBlock(newBlock){
        newBlock.previushash = this.getUltimoBlock().hash
        newBlock.mineBlock(this.dificult)
        this.chain.push(newBlock)
    }
}
module.exports = BlockChain