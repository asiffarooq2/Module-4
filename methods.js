// JavaScript Methods Example

let student = {
    name: "Asif",
    course: "JavaScript",

    displayInfo: function() {
        console.log("Name:", this.name);
        console.log("Course:", this.course);
    }
};

// Calling the method
student.displayInfo();