class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return 'My name is '+this.name+'I am '+this.age+' years old.'
    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return 'My name is '+this.name+'.I am '+this.age+'years old.I am a Student.I am at '+this.klass+'.';
    }
}
let name='Tom',age=21,klass='Class 2';
let student= new Student(name,age,klass);
console.log(student.introduce());
