/* Object = A collection of related properties and/or methods
            Can represent real world objects (People, Products, Places)
            object = {key:value , function()}
            */

const person = {
    name: "Pritam",
    lastName: "Petro",
    age: 30,
    sayHello: () => console.log("hello")
}

console.log(person.name);
console.log(person.age);
person.sayHello()

/* this = reference to the object where THIS is used 
        (the object depends on the immediate context)
        person.name = this.name*/

        // Important : This keyword do not work with the arrow Functions.
        
      const person1 = {
        name: "Priyanshu",
        favFood: "Chapati",
        sayHello: function(){ console.log(`He is ${this.name}`)}  //this.name == person1.name
      }  // In function only name throws an error either Name_of_Object.name or this.name is used.

      person1.sayHello();

/* constructor = special method for defining the properties
                 and methods of objects
                 */

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function() {console.log(`I am driving car of ${this.make}`)}
}

const car1 = new Car('Ford','XV5','2025','red');
console.log(car1);
car1.drive()

/* CLASS:
    
class =  (E56 feature) provide a more structured and cleaner way to
          work with objects compared to traditional constructor functions
          ex - static keyword, encapsulation, inheritance.
*/ 

class Product{
   constructor(name, year, price){
      this.name = name,
      this.year = year,
      this.price = price
   }

   displayProduct(){
    console.log(`The name of this product is ${this.name}`);
    console.log(`The price of this product is ${this.price}`);
   }

   calculateTotal(){
    console.log(`Total price of product is ${this.price * 2}`);
   }
}

const product2 = new Product("Apple",2026,200.56);
console.log(product2);
console.log(product2.name);
console.log(product2.displayProduct());

/* Static Methods

static = Keyword that defines properties or methods them to a class 
         itself rather than the object created from that class
         (Class owns anything static).

*/

class MathUtil{
    static PI = 3.14159;

    static getArea(radius){
        return this.PI*Math.pow(radius,2);
    }
    static getCircumference(radius){
        return 2*this.PI*radius;
    }
    static getDiameter(radius){
        return 2*radius;
    }
}

const a = MathUtil.getArea(10);
const b = MathUtil.getCircumference(10);
const c = MathUtil.getDiameter(10);

console.log(a); console.log(b); console.log(c);

/* Inheritance = allows a new class to inherit properties and methods 
                 from an existing class (parent -> child)
                 helps with code reusability */

class Animal{

    alive = true;

    eat(){
      console.log(`This ${this.name} is eating`);
    } 
    sleep(){
      console.log(`This ${this.name} is sleeping`);
    } 
}

class Rabbit extends Animal{
    name = 'rabbit';
}
class fish extends Animal{
    name = "Gold Fish";
}
class Hawk extends Animal{
    name = 'Hawk';
}

const r = new Rabbit();
const f = new fish();
const h = new Hawk();

console.log(r.name);
console.log(r.alive);
console.log(r.sleep());
console.log(f.eat());

/* super  = keyword is used in classes to call the constructor
            or access the properties and methods of a parent(superclass)
            this = this object
            super = the parent*/

class Animals{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Robin extends Animals{
    constructor(name,age,flyspeed){
        super(name,age);
        this.flyspeed = 52;
    }
}

class Dolphin extends Animals{
     constructor(name,age,swimspeed){
        super(name,age);
        this.swimspeed = 65;
    }
}

class Lion extends Animals{
    constructor(name,age,runspeed){
        super(name,age);
        this.runspeed = runspeed;
    }
}

const ri = new Robin("hi",2,85);
const d = new Dolphin("lIana",4,12);
const l = new Lion("Gruja",2,78);

console.log(ri.name);
console.log(d.name);
console.log(l.name);

console.log(l);

/* getter, setter
   
   getter =  special method that makes a property redable.
   setter = special method that makes a property writeable.

   validate and modify a value when reading/writing a property.

*/

class Rectangle{
    
     constructor(width,height){
        this.width = width;
        this.height = height;
     }

     set width(newi){
        if(newi > 0){
            this._width = newi;
        }else{
            console.error("The Width must be greater than 0");
        }
     }

     set height(newi){
        if(newi > 0){
            this._height = newi;
        }else{
            console.error("The Width must be greater than 0");
        }
     }

     get width(){
        return this._width;
     }
     
      get height(){
        return this._height;
     }

}

const a1 = new Rectangle(100,78);
console.log(a1.height);
console.log(a1.width);