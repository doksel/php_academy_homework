QUnit.test('Проверка функций Lesson_5', function(assert) {

    assert.ok( getFullname("Ivan"), "Ivan undefined", "getFullname - выводит имя и фамилию");
    assert.ok( getName2(),alert("Ivan"), "getName2 - выводит 'Ivan'");
    assert.ok(getName3(),alert("Ivan"), "getName3 - выводит 'Ivan'");
    assert.ok(func4(),alert('[object Window]'), "func4 - выводит Window");
    assert.ok( func4_1(),alert('[object Window]'),alert('undefined'),alert('Petr'), "func4_1 - выводит '[object Window]', 'undefined', 'Petr'");
    assert.ok( func5(),'Petr', "func5 - выводит 'Petr'");
    assert.ok( c1(),1, "counter - счетчик");
    assert.ok( A(1),6, "A - выводит 6");
});
QUnit.test("Проверка функций Counter из Lesson_5", function(assert) {
    var c10 = new Counter();
    assert.ok( с10.next(), 2, "next - увеличивает значение счетчика на 2");
    assert.ok( с10.back(),-2, "back - уменьшает значение счетчика на 2");
    assert.ok( с10.reset(), 0, "reset - обнуляет значение счетчика");
    assert.ok( с10.setCounterValue(), 0, "setCounterValue - выводит значние счетчика ");
});