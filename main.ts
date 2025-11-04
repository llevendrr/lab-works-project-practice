import { Student, Lector } from './models';

// Create some sample data
const student1 = new Student(1, "John", "Doe");
const student2 = new Student(2, "Jane", "Smith");

const lector1 = new Lector(1, "Dr. Brown", "brown@university.com", "123-456-7890", "Computer Science");
const lector2 = new Lector(2, "Prof. Davis", "davis@university.com", "098-765-4321", "Mathematics");

// Add some courses to students
student1.addCourse("Computer Science 101");
student1.addCourse("Mathematics 101");
student2.addCourse("Computer Science 101");

// Demonstrate the functionality
console.log("\n--- Students ---");
console.log(student1.getFullName(), "is enrolled in:", student1.getCourses());
console.log(student2.getFullName(), "is enrolled in:", student2.getCourses());

console.log("\n--- Lectors ---");
console.log(lector1.getContactInfo());
console.log("Teaching:", lector1.getSubject());
console.log(lector2.getContactInfo());
console.log("Teaching:", lector2.getSubject());