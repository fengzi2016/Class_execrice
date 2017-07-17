/**
 * Created by root on 17-7-17.
 */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return 'My name is' + this.name + '. I am ' + this.age + 'years old';
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
class Teacher extends  Person{
    constructor(name,age,klass='NO Class'){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return super.introduce()+'I am a Teacher.I teach '+this.klass+'.';
    }
}
let name='Tom',age=21,klass='Class 2';
let student= new Student(name,age,klass);
let teacher= new Teacher(name,age,klass);
console.log(student.introduce());
console.log(teacher.introduce());