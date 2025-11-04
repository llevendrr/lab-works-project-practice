export class Lector{ 
    id: number;
    name: string;
    email: string;
    phone: string;
    subject: string;

    constructor(id: number, name: string, email: string, phone: string, subject: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.subject = subject;
    }
    getContactInfo() {
        return `Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
    getSubject() {
        return this.subject;
    }
    updateEmail(newEmail: string) {
        this.email = newEmail;
    }   
    updatePhone(newPhone: string) {
        this.phone = newPhone;
    }

}