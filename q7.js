//Q7. Give me an example of your choice on closure, callback, prototype, each.

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
// OUTPUT:
// Callback
// ABCD
// 3213

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
