// declare the type of class and obj. using interface.
// single type
interface carType{
    brand:string ,
    price:number ,
    color:string ,
    show():void

}

class Car implements carType{
    brand;
    price;
    color;
    constructor(a:string,b:number,c:string){
        this.brand = a;
        this.price = b;
        this.color = c;
    }
     
    show():void{
        console.log("Brand: ",this.brand);
        console.log("Price: ",this.price);
        console.log("Color: ",this.color);
    
    }
}

var car1:carType = new Car("honda",3200000,"black");
car1.show();


//multiple types of class.
interface busType{
    working():void;
}

class Bus implements carType , busType{
    brand;
    price;
    color;
    constructor(a:string,b:number,c:string){
        this.brand = a;
        this.price = b;
        this.color = c;
    }
     working():void{
        console.log("Yes it is working");
        
    }
    show():void{
        console.log("Brand: ",this.brand);
        console.log("Price: ",this.price);
        console.log("Color: ",this.color);
    
    }
}
 var obj2:carType & busType = new Bus("mercedes",4560000,"blue");
 obj2.show();
 obj2.working();