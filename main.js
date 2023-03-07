
// Extract the last four characters from the string:
 let word = "beautiful";
 console.log(word.substr(5,9));


// Insert string at the fourth index given variable:

const eat = "eat"
const food = "I was feeling hungry today"
let foodie = `${food.slice(0,4)}eat ${food.slice(5)}`
console.log(foodie);


// Counting how many times the following string appears in the string variable:


const story = "The quick brown fox jumps over the lazy dog";

// for "the"
    word1 = "the";
    times = 0;
    position = story.indexOf(word1);

while (position > -1) {
    ++times;
    position = story.indexOf(word1, ++position);
}

console.log(times);  

// for "brown"
word2 = "brown";
times = 0;
position = story.indexOf(word2);

while (position > -1) {
++times;
position = story.indexOf(word2, ++position);
}

console.log(times);  


// Finding words from the following strings:

// "now"
const string1 = "We are now going to school";
console.log(string1.search("now"));

// "sitting"
const string2 = "The child was sitting on the table before it fell"
console.log(string2.search("sitting"));


// Converting strings into the specified format:

// UpperCase:
let a = "wonderful";
let result = a.toUpperCase();
console.log(result);

// LowerCase:
let c = "amazing";
let d = "BEneath"
let result1 = c.toLowerCase();
let result2 = d.toLowerCase();
console.log(result1);
console.log(result2);

// TitleCase
let e="A beautiful wedding";
e=e.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
console.log(e);