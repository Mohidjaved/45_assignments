/* Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great()
 with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians()
with each array to show that you have one array of the original names and one array with the Great added to
each magician’s name.


*/
let magicians = ["alvaro", "alex", "Harry porter"];
function show_magicians(name) {
    name.forEach(eachMagician => {
        console.log(eachMagician);
    });
}
function make_great(great) {
    for (let i = 0; i < great.length; i++) {
        great[i] = `the great ${great[i]}`;
    }
    return great;
}
let copyArray = magicians.slice();
let copy_greatMagicians = make_great(copyArray);
show_magicians(magicians);
show_magicians(copy_greatMagicians);
export {};
