// Generics and interface , enum

enum WEEK {MONDAY,TUESDAY,WEDNESDAY,THRUSDAY,FRIDAY,SATURDAY,SUNDAY}
console.log("day:",WEEK.FRIDAY);
console.log(WEEK[WEEK.SATURDAY]);



function swap<T>(arr:T[]):T[] {
    return[arr[1],arr[0]]
}

const result1:number[] = swap<number>([10,20])
const result2:string[] = swap<string>(["Ali","Hamza"])
const result3:boolean[] = swap<boolean>([true,false])

console.log("swap answer is",result1);
console.log("swap answer is",result2);
console.log("swap answer is",result3);

type objType ={
    name: string,
    age: number
}
const obj:objType ={
    name: "ali hamza",
    age: 22
}
console.log("obj is: ",obj);

interface myobj {
    id: number,
    rollno : number,
    class: string
}

const student:myobj ={
    id: 2153,
    rollno: 12,
    class: "3rd semester"
}
console.log("student", student);
