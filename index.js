//Object creation with curly Braces
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

console.log(person.getName()) //Output : Mithra
console.log(person.getEmployee_id()) //Output : 90033
console.log(person.getAge()) //Output : 21
console.log(person.getGender()) //Output : female
console.log(person.getCompany()) //Output : Ducen IT
console.log(person.getEmail()) //Output : mithraram.kumar@ducenit.com

person.setName('A');
person.setEmployee_id(90037);
person.setAge(22);
person.setGender('Male');
person.setCompany('Zoho');
person.setEmail('aishwaryra.sekar@ducenit.com');

console.log(person.getName())  //Output : A
console.log(person.getEmployee_id())  //Output : 90037
console.log(person.getAge())  //Output : 22
console.log(person.getGender())  //Output : Male
console.log(person.getCompany())  //Output : Zoho
console.log(person.getEmail())  //Output : aishwaryra.sekar@ducenit.com

name = person.name;
employee_id = person.employee_id;
age = person.age;
gender = person.gender;
company = person.company;
email = person.email;

console.log('Name : ',name); //Output : Name : A
console.log('Employee : ',employee_id); //Output : Employee : 90037
console.log('Age : ',age); //Output : Age : 22
console.log('Gender : ',gender) //Output : Gender : Male
console.log('Company : ',company); //Output : Company : Zoho
console.log('Email : ',email); //Output : Email : aishwaryra.sekar@ducenit.com
