const obj = {
  name: "John",
  address: {
    city: "New York",
    zip: 10001
  }
};

const copy = deepCopy(obj);
console.log(copy);
// Output: { name: "John", address: { city: "New York", zip: 10001 } }
function deepCopy(obj){
    let nobj={};
    for(let key in obj){
        nobj[key]=obj[key];
    }
    
    // nobj.name='kevin';
    // console.log(nobj,obj);
    return nobj;
}