const result = countVowelsAndConsonants("Hello World!");
console.log(result);
// Output: { vowels: 3, consonants: 7 }
function countVowelsAndConsonants(str){
    str=str.trim().split(' ').join("");
    str=str.split("").map(el=>el.toLocaleLowerCase());
    let newstr=[];
    for(let i=0;i<str.length;i++){
        let n=str[i].charCodeAt();
       if(n<=122&&n>=97) newstr.push(str[i]);
    }
    let vcount=0;
    newstr.map(el=>{
        if(el=='a'||el=='e'||el=='i'||el=='o'||el=='u') vcount++;
    })
    let finalobj={};
    finalobj['vowels']=vcount;
    finalobj['consonants']=newstr.length-vcount;
    return finalobj;
}