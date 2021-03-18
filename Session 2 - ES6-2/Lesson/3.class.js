// const dante = {
//     name: "Dante",
//     age: 20,
// }
// const lowell = {
//     name: "Lowell",
//     age: 24,
// }
class Person {
    name = "Demo";
    age = 10;
    address = "";
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.address = 'Hanoi';
    }
    sayHello() {
        console.log(`${this.name} said Hello`);
    }
    setName(newName) {
        this.name = newName;
    }
}
const dante = new Person('Dante', 20);
const lowell = new Person('Lowell', 24);
console.log(dante, lowell);
dante.sayHello();
dante.setName('Xiao');
dante.sayHello();

class Student extends Person {
    className = "";
    grade = 0;
    constructor(name, age, className, grade) {
        super(name, age);
        this.className = className;
        this.grade = grade;
    }
}

const mars = new Student('Mars', 18, 'CI_58', 8);
const lulu = new Student('Lulu', 18, 'CI_58', 7);
console.log(mars, lulu);
mars.sayHello();

const printApp = function(i) {
    input = document.getElementsByClassName('appinput')[i].value;
    console.log(input);
}

const app = document.getElementById('app');
const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', () => {
    const newform = new myForm();
    newform.render(app);
});
class myForm {
    input = null;
    button = null;
    constructor() {
        this.input = document.createElement('input');
        this.button = document.createElement('button');
        this.button.textContent = 'Get Value';
        this.button.addEventListener('click', () => {
            console.log(this.input.value);
        })
    }
    render(container) {
        const div = document.createElement('div');
        div.appendChild(this.input);
        div.appendChild(this.button);
        container.appendChild(div);
    };
}


