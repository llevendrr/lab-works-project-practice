export class Student {
    id: number;
    firstName: string;
    lastName: string;
    courses: string[];

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.courses = [];
    }

    addCourse(course: string) {
        this.courses.push(course);
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getCourses(): string[] {
        return [...this.courses];
    }
}