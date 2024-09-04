// let student = {
//     firstName: "Inshra",
//     lastName: "Shah",
//     rollNo: 1435,
//     age: 18,
//     class: "XII",
//     fullName : function(){
//         return this.firstName + this.lastName  //object function
//     }

// }
// console.log(student.fullName);

// const person = {

// }
// person.name = "John"
// person.age = 50
// person.email = "john4@gmail.com"
// document.getElementById("demo").innerHTML = person.name + " is " + person.age + " yearold "
// console.log(person);


//constructor function
// function Student(name, father_name, age, cls, nationality){
//       this.name = name;
//       this.fatherName = father_name;
//       this.age = age;
//       this.cls = cls;
//       this.nationality = nationality; //if we want to print all students we can do this like that
//       this.fullName = function(){  //contructor function
//         return this.name + " " + this.fatherName
//       }
// }

// let student1 = new Student("Inshra Shah", "Abid Shah", 18, "XII", "Pakistani")
// let student2 = new Student("Adeena Shah", "Abid Shah", 21, "XII", "Pakistani")
// let student3 = new Student("Ayesha", "Waqqas", 16, "XII", "Pakistani")
// //student1.nationality = "pakistani" // if we want to print only 1 student we can do this like that

// console.log(student1);
// console.log(student2);
// console.log(student3);




// function Plan(name, price, space, transfer, pages) {
//     this.doc = name; 
//     this.grumpy = price; 
//     this.sleepy = space; 
//     this.bashful = transfer; 
//     this.sneezy = pages;
    
// }
// var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
// var plan2 = new Plan("Premium", 5.99, 500, 5000, 50);
// var plan3 = new Plan("Ultimate", 9.99, 2000, 20000, 500);

// console.log(plan1);
// console.log(plan2);   
// console.log(plan3);
    

// // Constructor function for Person objects
// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.nationality = "English";
//   }
  
//   // Create 2 Person objects
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");
  
//   // Display nationality
//   document.getElementById("demo").innerHTML =
//   "My father is " + myFather.nationality + ". My mother is " + myMother.nationality; 
   
//   function Student(name, father_name, age, cls, nationality){
//     this.name = name;
//     this.fatherName = father_name;
//     this.age = age;
//     this.cls = cls;
//     this.nationality = nationality; //if we want to print all students we can do this like that
//     this.fullName = function(){  //contructor function
//       return this.name + " " + this.fatherName
//     }
// }
// let student1 = new Student("Inshra Shah", "Abid Shah", 18, "XII", "Pakistani")
// Student.prototype.email = "inshra@gmail.com"
// console.log(student1);


// let person = {
//   firstName : 'Jane',
//   lastName : 'Alex',
//   age : 22,
//   email : "johnalex@gmail.com",
//   sayHello(){
//     console.log("Hello my name is " + this.firstName + " " + car.brand);
//   },
//   fullName : function(){
//     return this.age + " " + this.email
//   }

// }

// let car = {
//   brand : 'Toyota',
//   model : 'lexas'
// }
// console.log(person);
// person.sayHello();
// console.log(person.fullName());


//Object Constructor Function:


  // function Student(name, father_name, age, cls, email){
  //         this.FullName = name;
  //         this.fatherName = father_name;
  //         this.age = age;
  //         this.cls = cls;
  //         this.email = email
          
  // }
  // Student.prototype.nationality = "Pakistani"
  //   let student1 = new Student("Inshra Shah", "Abid Shah", 18, "XII", "inshraabid@gmail.com" )
  //   let student2 = new Student("Adeena Shah", "Abid Shah", 21, "BSc","adeenaabid@gmail.com"  )
  // let student3 = new Student("Ayesha", "Waqqas", 16, "IX", "ayeshawaqqas@gmail.com" )
    
  //   console.log(student1);
  //   console.log(student2);
  //   console.log(student3);
  //   console.log(Student);

//     function Patient(name,  age, gender, email, disease, phone_number){
//       this.FullName = name;
//       this.age = age;
//       this.gender = gender;
//       this.email = email;
//       this.disease = disease;
//       this.phone_number = phone_number
//       this.patient_detail = function(){
//           return this.FullName + '' + this.email;
//       }
// }
// let patient1 = new Patient("Fatima", 16, "Female", "fatimaWaheed@gmail.com" , "cancer" , "0334589294")
//     let patient2 = new Patient("Aiman",  21, "Female","AimanAsim@gmail.com" , "cardiac" , "03452138906")
//   let patient3 = new Patient("Ahmed",  16, "Male", "ahmedwaqqas@gmail.com" , "liverissue" , "0378654798")
    
//     console.log(patient1);
//     console.log(patient2);
//     console.log(patient3);
//     console.log(Patient);
    
  

let person = {
  name: 'John',
  age: 30,

}
let name1 = "email" in person
console.log(name1);
