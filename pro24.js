//• Tests for equality and inequality with strings
let word = "Apple";
let word2 = "mango";
console.log("Is word.length == word2.length? I predict true");
console.log(word.length == word2.length);
console.log("is word === word2? I predict false");
console.log(word === word2);
//• Tests using the lower case function
let lowerWord = "RAINBOW";
console.log("is lowerWord.toLowerCase()===rainbow? I predict true ");
console.log(lowerWord.toLowerCase() === "rainbow");
console.log("is lowerWord.toLowerCase() !== rainbow? I predict false");
console.log(lowerWord.toLowerCase() !== "rainbow");
//• Numerical tests involving equality and inequality,
// greater than and less than, greater than or equal to, and less than or equal to
let num1 = 5;
let num2 = 10;
console.log("is num1!= num2? I  predict true");
console.log(num1 != num2);
console.log("is num1 == num2? I predict false");
console.log(num1 == num2);
console.log("Is num1 < num2? I predict true");
console.log(num1 < num2);
console.log("is num2 < num1? I predict false");
console.log(num2 < num1);
console.log("num2 > num1? I predict true");
console.log(num2 > num1);
console.log("num1 > num1?  I predict false");
console.log(num1 > num1);
console.log("is num1 >= 5? I predict true");
console.log(num1 >= 5);
console.log("is num1 >= num2? I predict false");
console.log(num1 >= num2);
console.log("is num2 <=num2? I predict true ");
console.log(num2 <= num2);
console.log("is num2 <= num1? I predict false");
console.log(num2 <= num1);
//• Tests using "and" and "or" operators
let num3 = 6;
let num4 = 7;
let num5 = 8;
console.log("is num3 < num4 && num4 < num5? I predict True");
console.log(num3 < num4 && num4 < num5);
console.log("is num3 < num4 && num4 > num5? I  predict False");
console.log(num3 < num4 && num4 > num5);
console.log("is num3 < num4 || num4 > num5? I predict true");
console.log(num3 < num4 || num4 > num5);
console.log("is num3 > num4 || num4 > num5? I predict false");
console.log(num3 > num4 || num4 > num5);
// Test whether an item is in a array
let arr = ["apple", "mango", "Orange", "Banana"];
console.log("arr.inludes(apple) ? I predict true");
console.log(arr.includes("apple"));
console.log("arr.includes(pineapple) ? I predict false");
console.log(arr.includes("pineapple"));
//• Test whether an item is not in a array
console.log("is !arr.includes(pomegranette)? I predict true");
console.log(!arr.includes("pomegranette"));
console.log("is !arr.includes(Banana)?  I predict false");
console.log(!arr.includes("Banana"));
export {};
