let newArray = Array.from("freeCodeCamp");

console.log(newArray); // ["f","r","e","e","C","o","d","e","C","a","m","p"]
let newArray2 = Array.from({ length: 7 }, (value, index) => index);

console.log(newArray2); // [0,1,2,3,4,5,6]


//JavaScript | Create interval that changes a value in an array

let array = [
  {id: 1, value: 0}, 
  {id: 2, value: 0}, 
  {id: 3, value: 0}
];

function updateValue () {
   var item = array.find(item => item.id === 3)
   if (item) item.value++
}

setTimeout(updateValue, 1000);


//Second Approach -------------------------------

let array2 = [
  {id: 1, value: 0}, 
  {id: 2, value: 0}, 
  {id: 3, value: 0}
];

function startIncrementing(elem) {
  setInterval(() => elem.value += 5, 500);
}

// Log the array every second
setInterval(() => console.log(array2), 1000);

// Start the increment interval
startIncrementing(array2[2]);

// Remove an elemnt after 1 second
setTimeout(() => array2.splice(1, 1), 1000);