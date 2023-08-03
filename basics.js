//Q1. Create a file with name basics and show all the features that you know about javascript

//Dynamic Type
var a = "Arit";
console.log(a, typeof a);
a = 22;
console.log(a, typeof a);

//Overloading
//function only prints 1 variable
function f1(a) {
  console.log(a);
}
//same function name but now prints 2 variables
function f1(a, b) {
  console.log(a, b);
}

//Hoisting
myName = "Arit";
console.log(myName);
var myName; // JS moves all the declarations to top hence this code works

//Currying
function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

function appender(a, b) {
  return a + b;
}

let curriedFunc = curry(appender);
console.log(curriedFunc("s1")("s2")); // Function is transformed from f(a,b) to f(a)(b)

// Closure
const closureExample = function () {
  console.log("Closure");

  for (var i = 0; i < 3; i++) {
    const log = function () {
      console.log(i);
    };

    setTimeout(log, 1000);
  }
};

// closureExample();
//OUTPUT: 3 3 3

//Callback
const callbackExample = function () {
  console.log("Callback");
  const foo = function (name, callback) {
    console.log(name);
    callback();
  };

  const bar = function () {
    console.log(3213);
  };

  foo("ABCD", bar);
};

// callbackExample();

//Prototype
var Person = {
  Name: "",
  Age: 20,
  getPersonDetails: function () {
    return {
      Name: this.Name,
      Age: this.Session,
    };
  },
};

//Inherit as Student
var Student = Object.create(Person);

Student.Name = "Jason";
Student.rollNo = "1234";
Student.Course = "B.Tech";

// Override
Student.getRollNoAndCourse = function () {
  return {
    rollNo: this.rollNo,
    course: this.course,
  };
};

console.log("Should show parent age as inherited", Student.Age);

console.log("Student Proto chain: ", Student.__proto__);

var Student2 = Object.create(null);
console.log("Null object has proto as undefined ", Student2.__proto__);

Student.__proto__ = null;
console.log("To stop chaining assign null ", Student.__proto__);
