const SHA256 =  require("crypto-js/sha256")

class Block {
    constructor (timestap, data, previushash=''){
        this.timestap = timestap
        this.data = data
        this.previushash = previushash
        this.nonce= 0
        this.hash= this.calcularHash()
    }

    calcularHash(){
        return SHA256(this.timestap+ JSON.stringify(this.data)+ this.previushash+ this.nonce).toString()
    }

    mineBlock(dificult){
        while (this.hash.substring(0, dificult) !== Array(dificult+1).join('0')){
            this.nonce++ 
            this.hash = this.calcularHash()
        }
        console.log('Bloque minado:  ' + this.hash);
        
    }
}

module.exports = Block