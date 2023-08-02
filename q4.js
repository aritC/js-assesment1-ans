/*

Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three") analyse the outputs we got and try explaining the reasons behind

*/

const doaddition = function (a, b, c) {
  return a + b + c;
};

console.log(
  doaddition(2, 3, 4), // This returns the sum of 3 numbers i.e 9
  doaddition(2), // This return NaN as we did not pass the other two variables so it assumes the other two values to be NaN and hence cannot perform addition
  doaddition(2.3, 3), // Same as before we did not pass the value of the last variable so it assumes the value to be NaN and hence cannot perform addition
  doaddition("first", 2, "three") // Since we passed a string value in the variables the + operator now starts working as a string concat operator rather than the summation operator
);

//OUTPUT: 9 NaN NaN first2three
