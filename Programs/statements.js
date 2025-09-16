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


// Q13: Write a function that checks all the elements in an array are numbers?
function allNumbers(arr) {
  return arr.every(element => typeof element === "number");
}

// Example usage:
console.log(allNumbers([1, 2, 3, 4]));      // true
console.log(allNumbers([1, "2", 3, 4]));   // false


// Q 14: Build a simple aPrime() function to check if a number is prime?
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


//Q15: Create a function that removes the duplicate values from an array?
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example usage:
console.log(removeDuplicates([1,2,3,4,2,3,5,1,6]));
// Output: [1, 2, 3, 4, 5, 6]
//🔹 new Set(arr) → array ko Set me convert kar deta hai (Set automatically duplicates hata deta hai).
//🔹 [...new Set(arr)] → Set ko dobara array me badal deta hai.


//Q 16:  What is the difference B/w ParseInt and Number?
console.log(typeof parseInt("123.456"))     // Number
console.log(typeof Number("123.456"))        // Number

//Q17: Why does 0.1 + 0.2!=0.3 in Js?

console.log(0.1 + 0.2 === 0.3)        // False
console.log(0.1 + 0.2 !== 0.3)         // true
console.log(0.1 + 0.2 != 0.3)        // true

//Q 18: Explain floating point percision issues in JavaScript?
Answer: Floating point precision issue JavaScript me is liye hoti hai kyunki JS numbers ko internally 64-bit floating point (IEEE 754 standard) me store karta hai. Is format ki limitation ki wajah se decimal numbers hamesha exact store nahi hote, balki unka approximate representation hota hai. Isi wajah se kabhi kabhi unexpected results milte hain, jaise:
console.log(0.1 + 0.2);   // 0.30000000000000004
console.log(0.3 === 0.1 + 0.2);  // false


//Q19: How would you handle high precision decimal math in Js?
Answer: JavaScript floating-point numbers cause precision issues, so for high-precision decimal math we either scale numbers as integers (like paisa instead of rupees) or use libraries such as decimal.js, big.js, or bignumber.js that handle accurate decimal calculations.

// Q20: Difference between slice() and splice()

// slice(): Returns a portion of the array without modifying the original
let arr1 = [1, 2, 3, 4, 5];
let sliced = arr1.slice(1, 4); 
console.log("Slice result:", sliced);   // [2, 3, 4]
console.log("Original after slice:", arr1); // [1, 2, 3, 4, 5]

// splice(): Modifies the array by adding/removing elements
let arr2 = [1, 2, 3, 4, 5];
let spliced = arr2.splice(1, 2, 99, 100);
console.log("Splice removed:", spliced); // [2, 3]
console.log("Array after splice:", arr2); // [1, 99, 100, 4, 5]


/*Important Note:
1st difference- Slice apka string and array dono k sath kam krta ha but splice apka sirf array ka sath kam krta ha.
2nd difference- slice apke original arary,string  me koi change nai krta but splice apke original array me change krdeta ha
3rd differnec - slice apka sirf tukra kat kr de raha hota ha lejin spilce apka tukra b kat kr de sakta ha sath hi add b kr sakta h elements ko sath hi delete bhi kr sakta ha
*/




