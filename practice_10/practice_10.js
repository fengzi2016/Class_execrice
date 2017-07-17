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
        this.klass=klass.number;
    }
    introduce(){
        let all=super.introduce()+' I am a Student.';
        if(klass.appendMember(this)===true){
            if(klass.Leader===false){
                return all+' I am at '+'Class'+klass.number+'.';
            }else {
                return all+klass.assignLeader(this);
            }
        }else{
            return 'It is not one of us.'
        }
    }
}
class Klass{
    constructor(number,member){
        this.member=member;
        this.number=number;
    }
    assignLeader(student){
        return 'I am a Leader of Class '+student.klass;
    }
    appendMember(student){
        if(this.member.indexOf(student.id)!==-1){
            return true;
        }else{
            return false;
        }
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
let klass=new Klass(2,[2015,2016]);
klass.Leader=false;
let student= new Student(id,name,age,klass);
console.log(student.introduce());