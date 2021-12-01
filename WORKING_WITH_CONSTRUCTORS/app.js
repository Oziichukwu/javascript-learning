function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);

    // }
} 


const micheal = new Person('micheal', 'smith', 'march 21 1991');


// console.log(micheal.hasOwnProperty('firstName'))



Person.prototype.calculateAge = function(){
    const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

Person.prototype.getMaried = function(newLastName){
    this.lastName = newLastName;
}

Person.prototype.getBMI = function(weight, height){

        return (weight / height);
}

Person.prototype.getTotalAmountOfCalories = function(weight, height, age){

    return (88.362 +(13.397 * weight ) + (4.799 * height) - (5.677 * age));

}

console.log(micheal)

console.log(micheal.calculateAge())

console.log(micheal.getFullName())

micheal.getMaried('fumilayo')

console.log(micheal.getFullName())

const weight = micheal.getBMI(50,10)

console.log(weight)

const bodyCalories = micheal.getTotalAmountOfCalories(400, 201, 30);

console.log(bodyCalories)


// working with object.create

const PersonPrototype = {

    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },

    getMarried: function(newLastName){

        this.lastName = newLastName;
    }
}


const mary = Object.create(PersonPrototype);

mary.firstName = 'Mary';
mary.lastName = 'Funsho';
mary.age = 56;


mary.getMarried('mofe');
console.log(mary)
console.log(mary.greeting())

const mosun = Object.create(PersonPrototype,{

    firstName: {value: 'helen'},
    lastName: {value: 'victor'},
    age: {value:45}
}); 


console.log(mosun);
console.log(mosun.greeting())

// working with ES6 syntax


class Person1{
    constructor(firstName, lastName,dob){

        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge(){
       const diff = Date.now() - this.birthday.getTime();
       const ageDate = new Date(diff);
       return Math.abs(ageDate.getUTCFullYear() - 1970);

    }
    getsMarried (newLastName){
        this.lastName = newLastName;
    }

    static addNumbers(x,y){
        return x * y;
    }
}


const femi = new Person1('Macha', 'William', '10-11-21');

femi.getsMarried('shalala')
console.log(femi)
console.log(femi.greeting())


// static methods
// this do not need an object to instantiate the method

class Person2{

    constructor(firstName,lastName,age) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static addNumbers(x,y) {

        return x + y;
    }
}


console.log(Person1.addNumbers(6,7))
console.log(Person2.addNumbers(8,9));



// sub classes (inheritance)

