// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   return str.split('').every((value, index)=>{
       return value===str[str.length-index-1];
       debugger;
       }
   );
}
palindrome('noman');
module.exports = palindrome;


// let arr= str.split('');
// let i=arr.length-1;
// arr.every(value => {
//     i--;
//     return  (value===arr[i]);
//
// });
// return arr;