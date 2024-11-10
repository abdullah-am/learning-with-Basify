/////////Js class 3,4/////////

///Sum of Numbers (Loop)///
let n=prompt("enter the n value")
function sum(n){
    let total=0;
    for(let i=1; i<=n;i++){
        total+=i;
    }
    return total;
}
console.log(sum(n));


/////Object Proper es////

const  obj={
    Title: "JavaScript: The Good Parts",
    Author: "Douglas Crockford", 
    Year: 2008
}
function printBookDetails(obj) {
    console.log(`Title: ${obj.Title}, Author: ${obj.Author}, Year: ${obj.Year}`);
  }
  printBookDetails(obj);


///Array Reversal///

let arr=[1,2,3,4,5]
for( let i=arr.length; i>=0; i--){
    console.log(arr[i]);
}
    


function countwords(arr) {
    const words = {};
  
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      
      if (words[item]) {
        words[item] += 1;
      } else {
        words[item] = 1;
      }
    }
  
    return words;
  }
  console.log(countwords(['apple', 'banana', 'apple']));
  

  ////flatten 2D ARRAY///


  function flatten(arr) {
    var flattenedArray = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            flattenedArray.push(arr[i][j]);
        }
    }
    return flattenedArray;
}

var result = flatten([[1, 2], [3, 4]]);
console.log(result); 

////Average of Array (1D) ///
function average(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

console.log(average([1, 2, 3, 4, 5])); 

/////Mul plica on Table (2D Array)/////
function multiplicationTable(n) {
    let table = [];

    for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 1; j <= n; j++) {
            row.push(i * j);
        }
        table.push(row);
    }

    return table;
}

console.log(multiplicationTable(3));