//complete this code
// Parent class: Animal
class Animal {
    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log(`The ${this._species} makes a sound`);
    }
}

// Child class: Cat
class Cat extends Animal {
    constructor(species) {
        super(species);
    }

    purr() {
        console.log("purr");
    }
}

// Child class: Dog
class Dog extends Animal {
    constructor(species) {
        super(species);
    }

    bark() {
        console.log("woof");
    }
}

// Example usage:
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr();      // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark();      // Output: woof



// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
