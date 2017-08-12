Student.group = [];
Student.allStudents = [];
function Student(obj) {
    this.name = obj.name;
    this.surname = obj.surname;
    this.grades = obj.grades;
    this.fullName = function () {
        return this.name + " " + this.surname;
    };
    this.gradesAvarage = function () {
        var gradesAll = 0;
        for (var i = 0; i < this.grades.length; i++) {
            gradesAll += this.grades[i];
        }
        return +(gradesAll / this.grades.length).toFixed(2);
    };

    Student.group.push(this);
    Student.showAllStudents = function () {
        for(var i = 0; i < Student.group.length; i++){
            Student.allStudents[i] = Student.group[i].fullName() + '.' + 'Средний бал = ' + Student.group[i].gradesAvarage();
        }return Student.allStudents;
    };
}

var student1 = new Student({name: 'Ivan', surname: 'Ivanov', grades: [4,5,5]});
var student3 = new Student({name: 'Petr', surname: 'Petrov', grades: [4,3,5]});
var student2 = new Student({name: 'Semen', surname: 'Semenov', grades: [3,5,5]});

console.log(Student.group);
console.log(Student.showAllStudents());
console.log(Student.bestStudent);
console.log(Student.showBestStudent());