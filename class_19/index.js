"use strict";
class Car {
    constructor(a, b, c) {
        this.brand = a;
        this.price = b;
        this.color = c;
    }
    show() {
        console.log("Brand: ", this.brand);
        console.log("Price: ", this.price);
        console.log("Color: ", this.color);
    }
}
var car1 = new Car("honda", 3200000, "black");
car1.show();
class Bus {
    constructor(a, b, c) {
        this.brand = a;
        this.price = b;
        this.color = c;
    }
    working() {
        console.log("Yes it is working");
    }
    show() {
        console.log("Brand: ", this.brand);
        console.log("Price: ", this.price);
        console.log("Color: ", this.color);
    }
}
var obj2 = new Bus("mercedes", 4560000, "blue");
obj2.show();
obj2.working();
