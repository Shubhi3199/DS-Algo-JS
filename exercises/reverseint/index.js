// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversed;
    let reversedNum;
    function rev(){
        reversed= n.toString().split('').reverse().join('');
        reversedNum=parseInt(reversed);
    }
    if(n>0){
        rev();
         return reversedNum;
    }else {
        rev();
        return Math.sign(n)*reversedNum;
    }
}
module.exports = reverseInt;
