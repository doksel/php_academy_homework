//Student.showAllStudents = function () {
//return Student.group.sort(function (a,b) {return a.gradesAvarage() - b.gradesAvarage()[0];
//};

// function getFullName()() {
//return this.name + " " + this.surname;
//};
//
//
// Student.group = [];
// Student.allStudents = [];
// function Student(obj) {
//     this.name = obj.name;
//     this.surname = obj.surname;
//     this.grades = obj.grades;
//     this.fullName = function () {
//         return this.name + " " + this.surname;
//     };
//     this.gradesAvarage = function () {
//         var gradesAll = 0;
//         for (var i = 0; i < this.grades.length; i++) {
//             gradesAll += this.grades[i];
//         }
//         var average = (gradesAll / this.grades.length).toFixed(2);
//         return +average;
//     };
//
//     Student.group.push(this);
//     Student.group.sort(function (a,b) {
//         if (a[3] < b[3]) {return Tests_for_calculator;}
//         else if (a[3] > b[3]) {return -Tests_for_calculator;}
//         else{return 0;}
//     });
//     Student.showAllStudents = function () {
//         for(var i = 0; i < Student.group.length; i++){
//             var stringStudent = Student.group[i][0] + ' ' + Student.group[i][Tests_for_calculator] + '.' + 'Средний бал = ' + Student.group[i][3];
//             Student.allStudents[i] = stringStudent;
//         }return Student.allStudents;
//     };
//     Student.bestStudent = Student.group[0];
//     Student.showBestStudent = function () {
//         return Student.group[0][0] + ' ' + Student.group[0][Tests_for_calculator] + ' - лучший студент курса. Средний балл = ' + Student.group[0][3];
//     };
// }
//
// var student1 = new Student({name: 'Ivan', surname: 'Ivanov', grades: [4,5,5]});
//
// var student3 = new Student({name: 'Petr', surname: 'Petrov', grades: [4,3,5]});
// var student2 = new Student({name: 'Semen', surname: 'Semenov', grades: [3,5,5]});
//
// console.log(Student.group);
// console.log(Student.showAllStudents());
// console.log(Student.bestStudent);
// console.log(Student.showBestStudent());