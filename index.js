//Object creation with definition
const person = {
  name : 'Mithra',
  employee_id : 90033,
  age : 21,
  gender : 'female',
  company : 'Ducen IT',
  email : 'mithraram.kumar@ducenit.com',
  // Getter methods
  getName : function () {
    return this.name;
  },
  getEmployee_id : function () {
    return this.employee_id;
  },
  getAge: function () {
    return this.age;
  },
  getGender : function () {
    return this.gender;
  },
  getCompany : function () {
    return this.company;
  },
  getEmail : function () {
    return this.email;
  },
  //Setter methods
  setName : function(name) {
    this.name = name;
  },
  setEmployee_id : function(employee_id) {
    this.employee_id = employee_id;
  },
  setAge : function(age) {
    this.age = age;
  },
  setGender : function(gender) {
    this.gender = gender;
  },
  setCompany : function(company) {
    this.company = company;
  },
  setEmail : function(email) {
    this.email = email;
  },
}

console.log(person.getName())
console.log(person.getEmployee_id()) 
console.log(person.getAge())
console.log(person.getGender())
console.log(person.getCompany())
console.log(person.getEmail())

person.setName('A');
person.setEmployee_id(90037);
person.setAge(22);
person.setGender('Male');
person.setCompany('Zoho');
person.setEmail('aishwaryra.sekar@ducenit.com');

console.log(person.getName())  
console.log(person.getEmployee_id())  
console.log(person.getAge())  
console.log(person.getGender())  
console.log(person.getCompany())  
console.log(person.getEmail())  

name = person.name;
employee_id = person.employee_id;
gender = person.gender;
company = person.company;
email = person.email;

console.log('Name : ',name);
console.log('Employee : ',employee_id);
console.log('Age : ',age);
console.log('Company : ',company);
console.log('Email : ',email); 
