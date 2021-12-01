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

