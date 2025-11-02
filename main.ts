class Student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;

        console.log(this.registerGitHubRepo());
    }

    registerGitHubRepo() {
        return true;
    }
}