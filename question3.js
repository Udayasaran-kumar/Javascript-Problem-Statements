const result = isPalindrome("A man, a plan, a canal, Panama");
console.log(result);
// Output: true
function isPalindrome(str){
    str=str.trim().split(' ').join("");
    str=str.split("").map(el=>el.toLocaleLowerCase());    
     let newstr=[];
    for(let i=0;i<str.length;i++){
        let n=str[i].charCodeAt();
       if(n<=122&&n>=97) newstr.push(str[i]);
    }
    // console.log(newstr);
    let left=0,right=newstr.length-1,res=true;
    while(left<=right){
        if(newstr[left]!==newstr[right]){
            res=false;
            return res;
        }
        left++;
        right--;
    }
    return res;
}