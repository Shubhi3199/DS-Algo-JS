// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
   const matches=str.match(/[aeiou]/gi);   //Here match is method on regular expression which returns us an array with a
   if(matches){                            //length equals to the no. of vowels in the given str String.
       return matches.length;              //g=>check the complete str and do not stop checking when the first vowel
   }else return  0;                        //is found.
}                                          //i=>to insure it is case insensitive.

module.exports = vowels;
//
// function vowels(str) {
//     let count=0;
//     let checker=['a', 'e', 'i', 'o', 'u'];
//     for(let char of str.toLowerCase()){
//         if(checker.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }
