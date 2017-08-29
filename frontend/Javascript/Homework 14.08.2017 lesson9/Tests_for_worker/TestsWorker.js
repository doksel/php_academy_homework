describe("Проверка функций Student", function() {
    var st  = new Student({name: 'Ivan', surname: 'Ivanov', grades: [4,4,4]});
    it("gradesAvarage - считает средний балл", function() {
        assert.equal(st.gradesAvarage(), 4);
    });

    it("showAllStudents - выводит список всех студентов", function() {
        var st1  = new Student({name: 'Ivan', surname: 'Ivanov', grades: [4,5,5]});
        var st2 = new Student({name: 'Petr', surname: 'Petrov', grades: [4,3,5]});
        var st3 = new Student({name: 'Semen', surname: 'Semenov', grades: [3,5,5]});
        assert.equal(Student.showAllStudents(), ["Ivan Ivanov.Средний бал = 4.67", "Semen Semenov.Средний бал = 4.33", "Petr Petrov.Средний бал = 4"]);
    });

    it("showBestStudent - выводит лучшего студента", function() {
        var st1  = new Student({name: 'Ivan', surname: 'Ivanov', grades: [4,5,5]});
        var st2 = new Student({name: 'Petr', surname: 'Petrov', grades: [4,3,5]});
        var st3 = new Student({name: 'Semen', surname: 'Semenov', grades: [3,5,5]});
        assert.equal(Student.showAllStudents(), ["Ivan", "Ivanov", Array(3), 4.67] );
    });
});