// Q1: Create a function that returns the last element in an array?
var element = [1, 2, 3, 4, 5, 6,7,8,9];

function lastElement(arr) {
    return arr[arr.length - 1];
    // return arr.pop()   // hum pop method bhi use kar sakte hain, lekin wo array ko modify kar deta hai
}

console.log(lastElement(element)); 
console.log(element);              


// Q2: Find the combination of two arrays?
let arr1=[1,2,3,4,5]
let arr2=[5,6,7,8,9]
let combo=arr1.concat(arr2)
// let combo=[...arr1,...arr2]   // modern method
console.log(combo)


// Q3: Generate a random integer between 0 and 18
console.log(Math.floor(Math.random()*19))          


// Q4: Filter out only string values from an array
let arr=[1,2,3,4,5,"nouman","ali"]
let result=arr.filter(element => typeof element === "string")
console.log(result)


// Q5: Find the maximum number in the array
let array1=[1,2,3,4,5]
console.log(Math.max(...array1))


// Q6: Return the number of keys in an object
let obj1={
    name: "Nouman",
    age: 21,
    city: "Faisalabad",
    CGPA: "3.53"
}
console.log(Object.keys(obj1).length)
console.log(Object.values(obj1).length)


// Q7: Filter out objects with gender === "Male"
let array2=[
    {name:"Nouman", city:"Faisalabad", gender:"Male"},
    {name:"Ali", city:"Lahore", gender:"Male"},
    {name:"Ayesha", city:"Islamabad", gender:"Female"},
    {name:"Fatima", city:"Karachi", gender:"Female"}
]
let result2=array2.filter(obj=>obj.gender==="Male")
console.log(result2)


// Q8: Convert array of strings to uppercase
let array3=["Ali","Nouman","usman","hamza"]
let result3=array3.map(element=>element.toUpperCase())
console.log(result3)


// Q9: Check if an object is empty
let obj2={ name:"Nouman", city:"FSD", CGPA:"3.53" }
console.log(Object.keys(obj2).length>0)


// Q10: Double each value in array
let array4=[1,2,3,4,5]
let double=array4.map(num=>num*2)
console.log(double)


// Q11: Convert array of strings into a single comma-separated string
let arrays=["nouman","ali","usman","hamza","bilal"]
console.log(arrays.join(","))

// Q12: Flatten a nested array (one level deep)
let arr5=[1,2,3,4,['a','b','c','d'],5,6]
console.log(arr5.flat(1))


// Q12: Write a function that checks all the elements in an array are numbers?
function allNumbers(arr) {
  return arr.every(element => typeof element === "number");
}

// Example usage:
console.log(allNumbers([1, 2, 3, 4]));      // true
console.log(allNumbers([1, "2", 3, 4]));   // false


// Q 13: Build a simple aPrime() function to check if a number is prime?
function aPrime(num) {
  if (num <= 1) return false;   // 1 or negative numbers prime nahi hote
  
  for (let i = 2; i <= Math.sqrt(num); i++) {  // √num tak check karna hi kaafi hai
    if (num % i === 0) {
      return false;  // agar divisible ho gaya to prime nahi hai
    }
  }
  return true;  // agar loop pura chal gaya to prime hai
}

// Example usage:
console.log(aPrime(2));   // true
console.log(aPrime(17));  // true
console.log(aPrime(18));  // false
console.log(aPrime(1));   // false
