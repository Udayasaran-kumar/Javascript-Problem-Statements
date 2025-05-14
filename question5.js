const obj1 = { name: "John", age: 30 };
const obj2 = { age: 40, city: "New York" };

const result = mergeObjects(obj1, obj2);
console.log(result);
// Output: { name: "John", age: 40, city: "New York" }
function mergeObjects(obj1,obj2){
    let nobj={};
    for(let key in obj1){
        nobj[key]=obj1[key];
    }
    for(let key in obj2){
        nobj[key]=obj2[key];
    }
    return nobj;
}
