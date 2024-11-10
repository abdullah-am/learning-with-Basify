///easy///
//Q1://
function reverseWords(sentence) {
    let words = sentence.split(" ");
    let reversedWords = words.map(word => word.split("").reverse().join(""));
    return reversedWords.join(" ");
}
console.log(reverseWords("JavaScript is fun"));
//Q2

function sumArray(arr) {
    let sum = 0;
    arr.forEach(function(num) {
        sum += num;
    });
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));


// Q3
function squareAndSum(arr) {
    return arr.map(num => num ** 2).reduce((acc, curr) => acc + curr, 0);
}
console.log(squareAndSum([1, 2, 3])); 

// Q4
function getTodayDate() {
    const today = new Date();
    return today.toISOString().split('T')[0];
}
console.log(getTodayDate()); 

// Q5
function filterPrimes(arr) {
    const isPrime = num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    return arr.filter(isPrime);
}
console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7])); 

// Q6
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("hello world from javascript")); 
// Q7
function findMax(arr) {
    return arr.reduce((max, num) => (num > max ? num : max), arr[0]);
}
console.log(findMax([3, 7, 1, 5, 9])); 

// Q8
function anyNegative(arr) {
    return arr.some(num => num < 0);
}
console.log(anyNegative([1, -2, 3, 4])); 
console.log(anyNegative([1, 2, 3, 4])); 

// Q9
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').reduce((count, char) => vowels.includes(char) ? count + 1 : count, 0);
}
console.log(countVowels("javascript")); 

// Q10
function sumMixedArray(arr) {
    return arr.reduce((sum, item) => sum + (typeof item === 'number' ? item : parseInt(item) || 0), 0);
}
console.log(sumMixedArray([10, "20", true, 30, "40"])); 

