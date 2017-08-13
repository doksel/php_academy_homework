function Human() {
        this.name = 'name';
        this.surname = 'surname';
        this.age = 20;
}

Student.group = [];
Student.allStudents = [];
function Student(obj) {
    Human.call(this);
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
        };
    }