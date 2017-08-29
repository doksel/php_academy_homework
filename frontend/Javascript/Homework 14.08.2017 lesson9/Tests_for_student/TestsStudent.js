describe("Проверка функций Student", function() {
    var student1 = new Student({name: 'Ivan', surname: 'Ivanov', grades: [4,5,5]});
    var student3 = new Student({name: 'Petr', surname: 'Petrov', grades: [4,3,5]});
    var student2 = new Student({name: 'Semen', surname: 'Semenov', grades: [3,5,5]});
    it("gradesAvarage - считает средний балл", function() {
        assert.equal(student1.gradesAvarage(), 4);
    });

    it("showAllStudents - выводит список всех студентов", function() {
        assert.equal(Student.showAllStudents(), ["Ivan Ivanov.Средний бал = 4.67", "Semen Semenov.Средний бал = 4.33", "Petr Petrov.Средний бал = 4"]);
    });

    it("showBestStudent - выводит лучшего студента", function() {
        assert.equal(Student.showAllStudents(), ["Ivan", "Ivanov", Array(3), 4.67] );
    });
});