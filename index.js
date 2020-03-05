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

console.log(person.getName()) //Output : Mithra
person.setAge(22);
console.log(person.getAge())  //Output : 22
email = person.email;
console.log('Email : ',email); //Output : Email : mithraram.kumar@ducenit.com