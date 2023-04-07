

function outer() {
  //1.Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.
  let a = 'color is: ';
  let b = { color: 'red' };
  console.log(a + b.color);
 
  // 3.Update the inner function to take two parameters named a and b.
  function inner(a,b) {
    // 2.Log the values of a and b in the inner function.
    console.log(a+b.color);
    // 5.Inside the inner function, assign new values to a and b and: 
    a = "Car's brand is: ";
    b = { Brand: 'BMW' };
    // 6.Inside the inner function, update a property of the b object.
    b.Brand = 'Ford';
    // /5.log them at the end of the function AND after the execution of inner(a,b).
    console.log(a + b.Brand);

   }
  // 4.Pass a and b in as arguments when you execute inner().
  inner(a, b);
  // log them at the end of the function AND after the execution of inner(a,b).
  console.log(a + b.Brand);
}

outer();

