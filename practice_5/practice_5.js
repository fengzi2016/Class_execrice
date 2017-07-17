
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return 'My name is'+this.name+'. I am '+this.age+'years old';
    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return super.introduce()+' I am at '+this.klass;
    }
}
class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }
    introduce(){
        return super.introduce()+'I am a Worker.I have a job.'
    }
}
let name='Tom',age=21,klass='Class 2';
let student= new Student(name,age,klass);
let worker= new Worker(name,age);
console.log(student.introduce());
console.log(worker.introduce());