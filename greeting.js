//Person class
var Person = /** @class */ (function () {
    //Constuctor
    function Person(firstName, lastName, age, phoneNum, state, zipCode, occupation, hourlyWage, hours) {
        this.certification = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNum = phoneNum;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        this.hours = hours;
    }
    //Getters and Setters
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getPhonenum = function () {
        return this.phoneNum;
    };
    Person.prototype.setPhoneNum = function (phoneNum) {
        this.phoneNum = phoneNum;
    };
    Person.prototype.getState = function () {
        return this.state;
    };
    Person.prototype.setState = function (state) {
        this.state = state;
    };
    Person.prototype.getZipCode = function () {
        return this.zipCode;
    };
    Person.prototype.setZipCode = function (zipCode) {
        this.zipCode = zipCode;
    };
    Person.prototype.getOccupation = function () {
        return this.occupation;
    };
    Person.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    //Methods
    Person.prototype.fullName = function () {
        return "My name is " + this.firstName + " " + this.lastName;
    };
    Person.prototype.nameAndNum = function () {
        return ("My name is   " + this.firstName + "  " + this.lastName + " and my phone number is "
            + this.phoneNum);
    };
    Person.prototype.nameAndAddress = function () {
        return ("My name is  " + this.firstName + "  " + this.lastName + " and I live in " + this.state
            + " with Zipcode " + this.zipCode);
    };
    Person.prototype.wageRate = function () {
        if (this.hours) {
            this.hours = this.hours;
        }
        else {
            this.hours = 40;
        }
        var weeklyWage = this.hourlyWage * this.hours;
        return ("My name is " + this.firstName + " and I my wage is $" + weeklyWage);
    };
    Person.prototype.addCerts = function () {
        var _a;
        var degrees = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            degrees[_i] = arguments[_i];
        }
        (_a = this.certification).push.apply(_a, degrees);
        return "My Certifications are:" + this.certification.join(",");
    };
    Person.createEmp = function (person) {
        return new Person(person.firstName, person.lastName);
    };
    return Person;
}());
var Anu = new Person("Anu", "Avula", 35, 9898989898, "NC", 28270, "Developer");
var Anil = new Person("Anil", "Kak", 23, 1234567890, "NC", 28270, "Developer");
var Tarini = new Person("Tarini", "Kak", 11, 4444567890, "NC", 28270, "Student");
var John = new Person("John", "Man", 28, 123456789, "NC", 28226, "HandyMan", 20);
document.getElementById("personName").innerHTML = Anu.fullName();
document.getElementById("personNameNum").innerHTML = Anil.nameAndNum();
document.getElementById("personNameAddress").innerHTML = Tarini.nameAndAddress();
document.getElementById("personWage").innerHTML = John.wageRate();
document.getElementById("personCert").innerHTML = John.addCerts("MBA", "CSM", "MCSD");
document.getElementById("Inf").innerHTML = Person.createEmp({
    firstName: "Peter", lastName: "Mahi"
}).fullName();
