// Properties of Objects in JavaScript

let student = {
    name: "Asif",
    age: 25,
    course: "JavaScript"
};

// Accessing properties
console.log("Name:", student.name);
console.log("Age:", student.age);

// Adding a new property
student.city = "Srinagar";

// Updating a property
student.age = 26;

// Deleting a property
delete student.course;

// Displaying all properties
console.log(student);