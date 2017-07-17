/**
 * Created by root on 17-7-17.
 */
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
        if(this.klass.appendMember(this)===true){
            if(this.klass.Leader===false){
                return all+' I am at '+'Class'+this.klass.number+'.';
            }else {
                return all+this.klass.assignLeader(this);
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
    isIn(teacher,student){
        if(teacher.classes.indexOf(student.klass.number)===-1){
            return false;
        }else{
            return true;
        }
    }
}
class Teacher extends  Person{
    constructor(id,name,age,classes){
        super(id,name,age);
        this.classes=classes;
    }
    introduce(classes){
        let result='';
        let all=super.introduce()+' I am a Teacher.I teach ';
        for(let value of classes){
            result=result+value+',';
        }
        if(result!==''){
            return all+result+'.';
        }else{
            return all+'No Class';
        }

    }
    introduceWith(student){
        let out= super.introduce()+' I am a Teacher ';
        if(this.isTeaching(student)===true){
            return out+' I teach '+student.name+'.';
        }else{
            return out+"I don't teach "+student.name+'.';
        }
    }
    isTeaching(student){
        return student.klass.isIn(this,student);
    }
}
let name='Tom',age=21,id=2016;
let klass=new Klass(2,[2015,2016]);
klass.Leader=false;
let student= new Student(id,name,age,klass);
console.log(student.introduce());
let teacher=new Teacher(id,name,age,[4,3]);
console.log(teacher.introduceWith(student));