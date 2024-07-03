/* Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides
 , and it should print a summary of the sandwich that is being ordered. Call the function three times,
  using a different number of arguments each time.*/

  function sandwich(...items:string[]){
        console.log(` Your sandwich which contains ${items} is being ordered\n`);
    };
sandwich('ham','cheese','lettuce','tomato','mayo','mustard')
sandwich('ham','cheese','lettuce','tomato','mayo')
sandwich('ham','cheese','lettuce','tomato')