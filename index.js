


// function Car(brand) {
//     this.brand=brand;
//     this.drive=()=>{
//         console.log(`vrooooom`)
//     }
//     this.fuel=()=>{
//         console.log(`putting gas....`)
//     }
    
// }

// function Tesla(brand){
//     this.brand=brand;

//      this.fuel=()=>{
//         console.log(`Tesla....`)
//     }

// }
// Tesla.prototype.fuel
// Object.setPrototypeOf(Tesla.prototype,Car.prototype);



// function Animal(name){
//     this.name=name;
// }

// Animal.prototype.makeSound=()=>{
//         console.log(`jjshkjdkjs`);
//     }


// function Cat(name){
//     this.name=name;
// }

// function Dog(name){
//     this.name=name;
// }

// Object.setPrototypeOf(Cat.prototype,Animal.prototype);
// Object.setPrototypeOf(Dog.prototype,Animal.prototype);

// const cat= new Cat("mimi");
// const dog= new Dog("dog");

// cat.makeSound();
// dog.makeSound();

// if(Object.getPrototypeOf(cat)===Object.getPrototypeOf(dog))
// console.log( );

//~~~~~PART1

////Q1
console.log(` ~~~Q1`);
function Phonem (brand,model) {
        this.brand=brand;
        this.model=model;

        this.details = ()=>{
            console.log(`PHONE:+ ${this.brand}  ${this.model}` )
        }

}

console.log(new Phonem("Samsong","S25").details())



////Q2
console.log(` ~~~Q2`);
function  Rectangle (width,height) {
        this.width=width;
        this.height=height;

        this.area= ()=>{
            return this.width*this.height;
        }

}

console.log(new Rectangle(4,5).area())


////Q3

console.log(` ~~~Q3`);
function  BankAccount (owner ,balance) {
        this.owner=owner;
        this.balance=balance;

        this.deposit= (amount)=>{
            return this.balance+amount;
        }

         this.withdraw= (amount)=>{
            return this.balance-amount;
        }

          this.checkBalance= ()=>{
            console.log(this.balance);
        }

}

console.log(new BankAccount("shilat",500).deposit(500))
// console.log(new BankAccount("shilat",500).withdraw(100))
// console.log(new BankAccount("shilat",500).checkBalance())//400


////~~~~~PART2

// Q4

console.log(` ~~~Q4`);
function Animal(name){
    this.name=name;
   
}

Animal.prototype.speak= function(){
        console.log(` ${this.name} make a sound`);
 }


function Dog(name){
    this.name=name;
      this.bark=()=>{
        console.log(` ${this.name}+bark`);
    }
    
}

Object.setPrototypeOf(Dog.prototype,Animal.prototype);
const dog= new Dog("dog");

dog.speak();
dog.bark();



///Q5

console.log(` ~~~Q5`);

function Vehiclel(type){
    this.type=type;
   
}

Vehiclel.prototype.describe =function(){
        console.log(`  the type is : ${this.type} `);
 }


function Car(brand,type){
    this.brand=brand;
    Vehiclel.call(this,type);
}

Car.prototype.info = function(){
        console.log(` ${this.brand}+ ${this.type}`);}

Object.setPrototypeOf(Car.prototype,Vehiclel.prototype);





const car= new Car("car","Tesla");

car.describe();
car.info();


///Q6


console.log(` ~~~Q6`);

function Shape(){ }

 Shape.prototype.area =function(){
        return 0;
 }


function Circle(radius){
    this.radius=radius;
}

Circle.prototype.area = function(){
        console.log(` ${this.radius*Math.PI}`)}


function Square(side){
    this.side=side;
}

Square.prototype.area = function(){
        console.log(this.side*this.side);
        }        

Object.setPrototypeOf(Circle.prototype,Shape.prototype);
Object.setPrototypeOf(Square.prototype,Shape.prototype);

const circle=new Circle(3.3);
circle.area();

const square=new Square(3);
square.area();




////~~~~~PART3

// Q7

console.log(` ~~~Q7`)


class Book {
    constructor(title, author) {
        this.title = title;
        this.author= author;
    }
    
     info() {
        console.log(this.title+"  AND the author is :"+this.author);
    }
}

 const book=new Book("princss","shilat");
  book.info();


  // Q8

console.log(` ~~~Q8`);

class Person{

      constructor(name) {
        this.name = name;
    }

    greet(){
        console.log("Hello i'm"+this.name);
    }

}

class Student extends Person{

      constructor(name,school) {
        super( name);
        this.school=school;
    }

    study(){
        console.log("Hello i'm  "+this.name +"  studing at  "+this.school);
    }

}

const student =new Student("shilat","etgar");
student.greet();
student.study();


 // Q9

console.log(` ~~~Q9`);


class Employee{
    #salary;
    constructor(salary){
        this.#salary=salary;
    }

    getSalary(){
        return this.#salary;
    }

    work(){
        console.log("employee is working");
    }
}

class Manager extends Employee{
    constructor(salary){
        super(salary);
      
    }

    work(){
        console.log("Manager is managing");
    }
}

const manager=new Manager(400);
manager.getSalary();
console.log(manager.getSalary());
manager.work();
