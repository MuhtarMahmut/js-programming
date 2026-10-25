
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating.`);
    }

}

class Student extends Person{
  
    constructor(name, age, grade){
        super(name, age);
        this.grade = grade;
    }

    study(){
        console.log(`${this.name} is studying.`);
    }
}

class Teacher extends Person{
   
    constructor(name, age, salary){
        super(name, age);
        this.salary = salary;
    }
   
    teach(){
        console.log(`${this.name} is teaching.`);
    }
}


let student = new Student("John Doe", 15, "High School");
console.log(student);
student.study();
student.eat();

let teacher = new Teacher("Mary Smith", 30, 50_000);
console.log(teacher);
teacher.teach();
teacher.eat();
