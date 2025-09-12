// //Q1: Create a function that returns the last element in an array?
var element = [1, 2, 3, 4, 5, 6,7,8,9];

function lastElement(arr) {        //Formal parameters wo hote hain jo function ke definition me likhe jaate hain.
    return arr[arr.length - 1];
    // return arr.pop()              //hum pop method use kr sakte ha but wo original array ko modify kr deta ha 
}

console.log(lastElement(element)); //9  /Actual parameters (arguments) wo hote hain jo function ko call karte waqt pass kiye jaate hain.
console.log(element)              // [1,2,3,4,5,6,7,8]



// Q2: Find the combination of two arrays?
let arr1=[1,2,3,4,5]
let arr2=[5,6,7,8,9]
let combo=arr1.concat(arr2)
// niche modern method ha spread operator wala
// let combo=[...arr1,...arr2]
console.log(combo)


//Q3: Generate a random integer between 0 and 18
[0,1] is ka matlab  ha ka 0 aur 1 k center wali value milay gi 1 kabi nai milay ga

console.log(Math.floor(Math.random()*19))          // math.floor is liye likha ha k hum integer chahiye na k points me  aur math.random* 19 is liye likha ha kue k humey 0 se 18 tak value chahiye 19 add na ho


Differnece between floor, seil and round
Math.floor(4.7) → 4 → hamesha neeche round karta hai.

Math.ceil(4.2) → 5 → hamesha upar round karta hai.

Math.round(4.5) → 5 aur Math.round(4.4) → 4 → 0.5 ya zyada ho to upar, warna neeche.


//  Q4: Write a function that takes an array combining both numbers nad strings, and returns a new array containing only the string values?
let arr=[1,2,3,4,5,"nouman","ali"]
let result=arr.filter((element)=>
{
    // console.log(element)        //1,2,3,4,5,"nouman","ali"
    if(typeof element === "string")
    {
        return true
    }
    else
    {
        return false
    }
})
console.log(result)

//Q5: Find the maximum number in the array?
let array=[1,2,3,4,5]
console.log(Math.max(...array))


//Q6: Write a function that returns the length of a given object(number of keys)
let obj=
{
    name: "Nouman",
    age: 21,
    city: "Faisalabad",
    CGPA: "3.53"
}
console.log(Object.keys(obj).length)       //[ 'name', 'age', 'city', 'CGPA' ] length 4
console.log(Object.values(obj).length)     //[ 'Nouman', 21, 'Faisalabad', '3.53' ]  length 4


//Q7: In an array of objects filter out those objects which have gender's value male?
let array=[
    {
        name:"Nouman",
        city: "Faisalabad",
        gender:"Male"
    },
    {
        name:"Ali",
        city:"Lahore",
        gender:"Male"
    },
    {
        name:"Ayesha",
        city:"Islamabad",
        gender:"Female"
    },
    {
        name:"Fatima",
        city:"Karachi",
        gender:"Female"
    }
]
let result=array.filter(obj=>
{
    return obj.gender ==="Male"
}
)
console.log(result)             //     [
  { name: 'Nouman', city: 'Faisalabad', gender: 'Male' },
  { name: 'Ali', city: 'Lahore', gender: 'Male' }
   ]

//Q8: Give an array of strings, return a new array where all strings are in uppercase.
let array=["Ali","Nouman","usman","hamza"]
let result=array.map(element=>
{
    return element.toUpperCase()
}
)
console.log(result)

//Q9: Checks if an object is empty or not?
let obj=
{
    name:"Nouman",
    city:"FSD",
    CGPA: "3.53"
}
console.log(Object.keys(obj).length>0)

//Q10: Create an array of numbers and double each value using map?
let array=[1,2,3,4,5]
let double=array.map(num=>
{
    return num*2
}
)
console.log(double)

//Q11: Convert an array of strings into a single comma-separated string?
let arrays=["nouman","ali","usman","hamza","bilal"]
console.log( typeof arrays.join(","))                   // Question me comma se kaha ha is liye hum join k under string me wo likha ga