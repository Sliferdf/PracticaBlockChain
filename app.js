const Block = require('./block')
const BlockChain = require('./BlockChain')

let SliferDF= new BlockChain()
console.log('minando el primer bloque...');
SliferDF.pushBlock(new Block('12/06/2019', {cantidad: 10}))
console.log('minando el segundo bloque...');
SliferDF.pushBlock(new Block('23/05/2019', {cantidad: 1}))
console.log('minando el tercer bloque...');
SliferDF.pushBlock(new Block('02/07/2019', {cantidad: 16}))

console.log(JSON.stringify(SliferDF, null, 2))
