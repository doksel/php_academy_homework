QUnit.test('Проверка функций Student', function(assert) {
    this.grades = [4,4,4];
    assert.ok( this.gradesAvarage(), 4, 'gradesAvarage - считает средний балл');
    assert.ok( Student.showAllStudents(), 'showAllStudents - выводит список всех студентов');
    assert.ok( Student.showAllStudents(), 'showAllStudents - выводит список всех студентов');
});