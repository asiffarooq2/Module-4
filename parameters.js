// Parameters and Optional Parameters in One Program

function studentInfo(name, course = "JavaScript") {
    console.log("Name:", name);
    console.log("Course:", course);
    console.log("----------------");
}

// Passing only the required parameter
studentInfo("Asif");

// Passing both parameters
studentInfo("Sara", "Python");