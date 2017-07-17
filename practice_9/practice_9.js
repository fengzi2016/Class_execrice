/**
 * Created by root on 17-7-17.
 */
class Person{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    introduce(){
        return 'My name is '+this.name+'. I am '+this.age+' years old';
    }
}
class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass=klass;
    }
    introduce(){
        let all=super.introduce()+' I am a Student.';
        if(this.klass.Leader===false){
            return all+' I am at '+'Class'+this.klass.number+'.';
        }else {
            return all+this.klass.assignLeader(this);
        }

    }
}
class Klass{
    constructor(number){
        this.number=number;
    }
    assignLeader(student){
        return 'I am a Leader of '+student.klass.number;
    }
}
class Teacher extends  Person{
    constructor(id,name,age,klass='NO Class'){
        super(id,name,age);
        this.klass=klass;
    }
    introduce(){
        return super.introduce()+' I am a Teacher.I teach '+this.klass.number+'.';
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
let name='Tom',age=21,id=2016;
let klass=new Klass(2);
klass.Leader=true;
let student= new Student(id,name,age,klass);
let teacher= new Teacher(id,name,age,klass,student);
console.log(student.introduce());
console.log(teacher.introduce());
console.log(teacher.introduceWith(student));