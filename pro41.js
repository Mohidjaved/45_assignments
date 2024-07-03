/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
 which prints the name of each magician in the array*/
let magicians = ["alvaro", "alex", "Harry porter"];
function show_magicians(magician) {
    magicians.forEach(eachMagician => {
        console.log(eachMagician);
    });
}
show_magicians(magicians);
export {};
