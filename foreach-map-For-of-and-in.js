let arr=["Javascript", "Phython","C++", "C","Java"];
let arr2=[12,67,22,45,23,19,51];
let NewArray=arr2.forEach(element => {
    return element*2;
});

console.log("NewArray", NewArray);// it will print  as Undefined because Foreach does not create a new array

let NewArray2=arr2.map(element => {
    return element*2;
});

console.log("NewArray2", NewArray2); //it will create a new array wuth 2 times of the eachelements of the current arrary.

for (const iterator of arr2) {
    console.log(iterator);  // 12, 67, 22, 45, 23, 19, 51
}
// For of iterates over value 


//For in iterates over Key 
for(const key in arr2){
    console.log(arr2[key]);//// 12, 67, 22, 45, 23, 19, 51
}
