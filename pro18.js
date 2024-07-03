//seeing the world
let world = ["Paris", "Singapore", "Finland", "Turkey", "England"];
console.log("Original Array", world);
console.log("alphabetical array", world.slice().sort());
console.log("original array", world);
console.log("reverse array", world.slice().sort().reverse());
console.log("original array", world);
world.reverse();
console.log("reverse order is changed", world);
world.reverse();
console.log("order reversed to original", world);
world.sort();
console.log("order changed to alphabetical order", world);
world.sort().reverse();
console.log("order changed to reverse alphabetical order", world);
//question 19
let guest = ["sohaib", "salman", "hammad"];
guest.forEach(guestlist => {
    console.log(`${guestlist} you are invited for dinner with us Today.`);
});
console.log("\t\nNew list\n\t");
//changing in list
let removedGuest = guest.splice(2, 2);
guest.push("Ubaid");
guest.forEach(newlist => {
    console.log(`${newlist} You are invited for the dinner with us. `);
});
console.log("\t\n  \n\t");
guest.unshift("aqib");
guest.push("adnan");
guest.splice(Math.floor(guest.length / 2), 0, "hussain");
guest.forEach(moreGuest => {
    console.log(`${moreGuest} I found a big dining table. lets have a dinner together.`);
});
//shrink guest list
console.log("\n\t \t\n ");
console.log("Sorry we can invite just 2 people because the large table cant be shipped on time");
while (guest.length > 2) {
    let removedGuest = guest.pop();
    console.log(`Sorry ${removedGuest} you are not invited for dinner because of the table issue`);
    console.log(`${guest} you are still invited for the dinner`);
}
console.log("Number of people invited for dinner is", guest.length);
export {};
