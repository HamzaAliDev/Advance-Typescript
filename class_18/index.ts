// oop concept first class
//declare class and using constructor.

class student{
    
    rollNo:number ;
    name:string ;
    age:number
    constructor(rollno:number,name:string,age:number){
        this.rollNo = rollno;
        this.name = name;
        this.age = age;
    }
    
}

var std1 = new student(2,"ali",18);
console.log("roll no. :",std1.rollNo);
console.log("Name: ",std1.name);
console.log("age :",std1.age);

class ace{
    constructor(){
        console.log("new object created...");
        
    }
}

var obj0 = new ace();
var obj1 = new ace();
var obj2 = new ace();
var obj3 = new ace();

