// Let’s say you have a game where you have to perform an action based on weather the user has pressed the up arrow key, down arrow key, left arrow key or right arrow key.

// good solution
enum Directions {
  // you can just give the first one value and the rest one will get automatically.
  
  up, //1 and carry on
  down,
  left,
  right,
}

function doSomething(keyPressed: Directions) {
  //logic
  if (keyPressed == Directions.up) {
    console.log("nice!");
  }
}
// bad solution
doSomething(Directions.up);
doSomething(Directions.down);
