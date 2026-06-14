// Scope of Variables in Functions

let course = "JavaScript";   // Global variable

function showInfo() {
    let name = "Asif";       // Local variable

    console.log("Name:", name);
    console.log("Course:", course);
}

showInfo();

// Global variable can be accessed outside the function
console.log("Course:", course);

// The following line would cause an error because
// 'name' is a local variable and exists only inside the function
// console.log(name);