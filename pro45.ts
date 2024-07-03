/* Cars: Write a function that stores information about a car in a Object.
 The function should always receive a manufacturer and a model name.
  It should then accept an arbitrary number of keyword arguments.
   Call the function with the required information and two other name-value pairs, 
   such as a color or an optional feature.
    Print the Object that’s returned to make sure all the information was stored correctly.
*/
function carInfo(manufacturer:string, model:string, ...options: {[key : string] : any } []) {
    
let car = {
    manufacturer: manufacturer,
    model: model,
    ...Object.assign({}, ...options)
}
return car;
}

let car1 = carInfo(`Honda`, `Civic`, {color:`black`})
console.log(car1);
let car2 = carInfo(`toyota`, `corola`, {color: `white`})
console.log(car2);