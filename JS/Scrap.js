

class Person {
    constructor(personName){
        this.name = personName;
    }

    printTitle(){
        console.log(`Hello, ${this.name}`);        
    }
    
    //add

    //location
}

//

class Bum extends Person {

}

class Programmer extends Person {
    constructor(name, occupation){
        super(name); //super calls constructor of class that it extends
        this.occupation = occupation;
    }

    printOccupation(){
        super.printTitle()
        console.log(`My job is ${this.occupation}`)
    }
}

const Joey = new Person("Joey");
const Benji = new Person('Benji');

const Bro = new Programmer("Bro", "Programmer")

// --presets=es2015,react

Joey.printTitle();
Benji.printTitle();

Bro.printOccupation();