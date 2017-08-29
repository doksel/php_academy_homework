QUnit.test('Проверка функций Student', function(assert) {
    assert.ok( this.gradesAvarage(), 4, 'gradesAvarage - считает средний балл');
    assert.ok( Student.showAllStudents(), 'showAllStudents - выводит список всех студентов');
    assert.ok( Student.showAllStudents(), 'showAllStudents - выводит список всех студентов');
});