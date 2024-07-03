/*Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great()
 that modifies the array of magicians by adding the phrase the Great to each magician’s name.
  Call show_magicians() to see that the list has actually been modified.
 */

let magicians : string[] = ["alvaro", "alex" , "Harry porter"];


function show_magicians(name:string[]) {
   magicians.forEach(eachMagician => {
       console.log(eachMagician);
       
   });}

function make_great(great:string[]) {
for (let i = 0; i < great.length; i++) {
     great[i] = ` the great ${great[i]}`}
    
}
make_great(magicians);
show_magicians(magicians);