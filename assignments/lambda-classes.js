// CODE here for your Lambda Classes
/*function Person(attributes){
    this.name=attributes.name;
    this.age=attributes.age;
    this.location=attributes.location;
    this.gender=attributes.gender;
}

Person.prototype.speak=function(){
    return `Hello my name is ${this.name}, I am from ${this.location}`
}

function Instructor(instrAttributes){
    Person.call(this,instrAttributes);
    this.specialty=instrAttributes.specialty;
    this.favLanguage=instrAttributes.favLanguage;
    this.catchPhrase=instrAttributes.catchPhrase;
}

Instructor.prototype=Object.create(Person.prototype);

Instructor.prototype.demo=function(){
    return 'Today we are learning about ' 
}
Instructor.prototype.grade=function(){
    return 'studentname receives a perfect score on subject'
}

function student(stuAttributes){
    Instructor.call(this,stuAttributes);
    this.previousBackground=stuAttributes.previousBackground;
    this.className=stuAttributes.className;
    this.favSubjects=stuAttributes.favSubjects;
}
student.prototype=Object.create(Instructor.prototype);

student.prototype.listsSubjects=function(){
    return `${this.favSubjects}`
}
student.prototype.PRAssignment=function(){
    return ' has submitted a PR for {subject}'
}
student.prototype.sprintChallenge=function(){
    return ' has begun sprint challenge on ${subject}'
}

function ProjectManager(proAttributes){
    student.call(this,proAttributes);
    this.gradClassName=proAttributes.gradClassName;
    this.favInstructor=proAttributes.favInstructor;
}
ProjectManager.prototype=Object.create(student.prototype);

ProjectManager.prototype.standUP=function(){
    return `${this.name} announces to channel, @channel standy times!​​​​​`
}
ProjectManager.prototype.debugsCode=function(){
    return 'name debugs udentnames code on ubject'
}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const jane= new student({
      name:'Jane',
      previousBackground: 'Healthcare',
      className:'web19',
      favSubjects:'Advanced CSS',

  });

  const mark= new ProjectManager({
      name:'Mark',
      gradClassName:'CS12',
      favInstructor:'Josh',
  })

  console.log(fred.speak());
  console.log(jane.listsSubjects());
  console.log(mark.standUP());*/

  //es6 
class Person {

    constructor({name, age, location, gender}) {
        this.name=name;
        this.age=age;
        this.location=location;
        this.gender=gender;
    }

    speak() {

        return `Hello my name is ${this.name}, I am from ${this.location}`

    }
}

class Instructor extends Person {

    constructor(instrAttributes) {

        super(instrAttributes);
        this.specialty=instrAttributes.specialty;
        this.favLanguage=instrAttributes.favLanguage;
        this.catchPhrase=instrAttributes.catchPhrase;
    }

    demo() {

        return 'Today we are learning about ';
    }

    grade() {

        return 'studentname receives a perfect score on subject';
    }
}

class student extends Instructor {

    constructor(stuAttributes) {

        super(stuAttributes);
        this.previousBackground=stuAttributes.previousBackground;
        this.className=stuAttributes.className;
        this.favSubjects=stuAttributes.favSubjects;
    }

    listsSubjects() {

        return `${this.favSubjects}`

    }

    PRAssignment() {
        return ' has submitted a PR for {subject}';
    }

    sprintChallenge() {
        return ' has begun sprint challenge on ${subject}';
    }
}

class ProjectManager extends student {

    constructor(proAttributes) {
        super(proAttributes);
        this.gradClassName=proAttributes.gradClassName;
        this.favInstructor=proAttributes.favInstructor;

    }

    standUP() {

        return `${this.name} announces to channel, @channel standy times!`

    }

    debugsCode() {

        return 'name debugs udentnames code on ubject';

    }
}


const fred = new Instructor({

    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`

  });

const jane= new student({

    name:'Jane',
    previousBackground: 'Healthcare',
    className:'web19',
    favSubjects:'Advanced CSS',

});

const mark= new ProjectManager({

    name:'Mark',
    gradClassName:'CS12',
    favInstructor:'Josh',
    
})

console.log(fred.speak());
console.log(jane.listsSubjects());
console.log(mark.standUP());