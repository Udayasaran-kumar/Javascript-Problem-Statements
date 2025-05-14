const result = reverseWords("JavaScript is fun");
console.log(result);
// Output: "tpircSavaJ si nuf"
function reverseWords(str){
    str=str.trim().split(" ");
    str=str.map(el=>el.split('').reverse().join(""));
    return str;
}