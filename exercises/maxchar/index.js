// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let  max = 0, charMax = '';
    let charObj={};
    let char='';
    for(char of str){
        if(!charObj[char]){
            charObj[char]=1;
        }else{
            charObj[char]++;
        }
    }
    for(char in charObj){
        if(charObj[char]> max){
            max=charObj[char];
            charMax=char;

        }
    }
    return charMax;
}


module.exports = maxChar;


//
// function maxChar(str) {
//     let arr=str.split('');
//     let i=0,alpha, t=0, count=[null], n=0;
//     while(t<arr.length){
//         alpha=arr[t];
//         while(i<arr.length){
//
//             if(alpha===arr[i]){
//                 n=t;
//                 count[n]++;
//                 i++;
//             }else {
//                 n++;
//                 i++;
//                 count[n]++;
//             }
//
//         }
//         t++;
//     }
//     console.log(count);
// }
//
//
// module.exports = maxChar;

