//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "Mohid";
let lowerCaseName = personName.toLowerCase();
console.log(lowerCaseName);
let uppercaseName = personName.toUpperCase();
console.log(uppercaseName);
let personName2 = "mohid";
let titleCaseName = personName2.charAt(0).toUpperCase() + personName2.slice(1);
console.log(titleCaseName);
export {};
