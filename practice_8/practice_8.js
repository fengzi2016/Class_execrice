/**
 * Created by root on 17-7-17.
 */
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return 'My name is '+this.name+'. I am '+this.age+' years old';
    }
}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return super.introduce()+' I am at '+this.klass+'.';
    }
}
class Klass{
    constructor(number){
        this.number='Class'+number;
    }
}
class Teacher extends  Person{
    constructor(name,age,klass='NO Class'){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return super.introduce()+' I am a Teacher.I teach '+this.klass+'.';
    }
    introduceWith(student){
        let out= super.introduce()+' I am a Teacher';
        if(student.klass===teacher.klass){
        return out+' I teach '+student.name+'.';
        }else{
            return out+"I don't teach "+student.name+'.';
        }
    }
}
let name='Tom',age=21;
let klass=new Klass(2);
let student= new Student(name,age,klass.number);
let teacher= new Teacher(name,age,klass.number,student);
console.log(student.introduce());
console.log(teacher.introduce());
console.log(teacher.introduceWith(student));