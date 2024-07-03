//Guest List and Changing Guest List
let guest :string[] = ["sohaib", "salman", "hammad"]
guest.forEach(guestlist => {
    console.log(`${guestlist} you are invited for dinner with us Today.`);
    
});
console.log("\t\nNew list\n\t");

//changing in list
 let removedGuest = guest.splice(2,2)
guest.push("Ubaid");
guest.forEach(newlist => {
    console.log(`${newlist} You are invited for the dinner with us. `);
    
});

console.log("\t\n  \n\t");

guest.unshift("aqib")
guest.push("adnan")
guest.splice(Math.floor(guest.length/2),0, "hussain")
guest.forEach(moreGuest => {
    console.log(`${moreGuest} I found a big dining table. lets have a dinner together.`);
});

//shrink guest list

console.log("\n\t \t\n ");

console.log("Sorry we can invite just 2 people because the large table cant be shipped on time");


while (guest.length > 2 ) {
    let removedGuest = guest.pop()
    console.log(`Sorry ${removedGuest} you are not invited for dinner because of the table issue`)
    console.log(`${guest} you are still invited for the dinner`);    
}
guest.splice(0,guest.length)
console.log(guest);


    



