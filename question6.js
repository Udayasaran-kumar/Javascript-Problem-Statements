const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Watermelon", "Peach", "Kiwi"];

console.log(rearrangeFruits(fruits));

// rearrangeFruits(fruits);
// ["Strawberry", "Watermelon", "Peach", "Kiwi", "Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes"];

function rearrangeFruits(arr){
    let temp=arr.splice(arr.length-4,4);
    // console.log(temp);
    for(let i=temp.length-1;i>=0;i--){
       arr.unshift(temp[i]);
    }
    return arr;
}