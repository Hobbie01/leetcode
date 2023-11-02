// var isPalindrome = function(x) {
//     const startTime = new Date();



//     const endTime = new Date();
//     const executionTime = endTime - startTime;
//     console.log(`โปรแกรมที่รันเสร็จในเวลา: ${executionTime} มิลลิวินาที`)
// };

var isPalindrome = function(x) {
const strX = x.toString();

for(let i = 0; i < strX.length/2+1; i++) {
    console.log(`${strX[i]} === ${strX[strX.length-i-1]}`)
    if (strX[i] !== strX[strX.length-i-1]) return false 
}
return true


};

module.exports  = isPalindrome
