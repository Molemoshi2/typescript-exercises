var person = /** @class */ (function () {
    function person(name, age) {
        this.socialSecurityNumber = 54656;
        this.name = name;
        this.age = age;
    }
    person.prototype.displayName = function () {
        console.log("Name: ".concat(this.name));
    };
    //method to diplay age
    person.prototype.displayAge = function () {
        console.log("Age: ".concat(this.age));
    };
    return person;
}());
var personObject = new person('Shantel', 24);
// diplay the person's name
personObject.displayName();
//display the person's age
personObject.displayAge();
