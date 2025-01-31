//? Question-3: Follow these steps:
//todo-1: Write a Factory function (function name must be: createPerson).
//todo-2: The createPerson factory function accepts three parameters: name, age, and profession
//todo-3: Define a method (method name must be: introduce) on the object. This method must return this structure: "Hi, my name is (name). I'm (age) years old and work as a (profession)."
//todo-4: Then display below outputs using the function createPerson with these parameters: (name: John Doe, age: 30, profession: Web Developer, or our personal information).
/**
 * Output: John Doe
 * Output: 30
 * Output: Web Developer
 * Output: Hi, my name is John Doe. I'm 30 years old and work as a Web Developer.
 *
 */

//!Answer:
function createPerson(name, age, profession) {
    return {
        name,
        age,
        profession,
        introduce() {
            return `Hi, my name is ${this.name}. I'm ${this.age} years old and work as a ${this.profession}.`;
        }
    };
}

const person = createPerson("John Doe", 30, "Web Developer");

console.log(person.name);
console.log(person.age);
console.log(person.profession);
console.log(person.introduce());
