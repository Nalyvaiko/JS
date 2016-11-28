class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi! I'm ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
    toString() {
        return JSON.stringify(this);
    }
}

class Child extends Person {
    constructor(name, age, like) {
        super(name, age);
        this.like = like;
    }
    getGreeting() {
        return `Hi!!!!!! My name is ${this.name} and I like ${this.like}.`
    }
}

class Baby extends Person {
    getGreeting() {
        return `Wahhhhhhhh!`;
    }
}

const me = new Person('Vitalii');
console.log(me.toString());

const andrew = new Child('Andrew', 25, 'Cars');
console.log(andrew.getGreeting());

const baby = new Baby();
console.log(baby.getGreeting());
