// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

}

module.exports = anagrams;

//
// function anagrams(stringA, stringB) {
//     let wordA=stringA.replace(/[^\w]/g, "").toLowerCase();
//     let wordB=stringB.replace(/[^\w]/g, "").toLowerCase();
//     let charObjA={}, charObjB={};
//     let char;
//     for(char of wordA){
//         if(!charObjA[char]){
//             charObjA[char]=1;
//         }else {
//             charObjA[char]++;
//         }
//
//     }
//     for(char of wordB){
//         if(!charObjB[char]){
//             charObjB[char]=1;
//         }else {
//             charObjB[char]++;
//         }
//         if(wordA.length===wordB.length){
//             charObjA.forEach((item)=>{
//                 for(let i=0; i<charObjB.length; i++){
//                     if(item===Object.values(charObjB)[i]){
//
//                     }
//                 }
//             })
//         }else return false;
//     }
// }
