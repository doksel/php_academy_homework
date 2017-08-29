// describe("Проверка функций Lesson_5", function() {
//
//     it("getFullname - выводит имя и фамилию", function() {
//         assert.equal(getFullname("Ivan"), "Ivan undefined");
//     });
//
//     it("getName2 - выводит 'Ivan'", function() {
//         assert.equal(getName2(),"Ivan");
//     });
//
//     it("getName3 - выводит 'Ivan'", function() {
//         assert.equal(getName3(),alert("Ivan"));
//     });
//
//     it("func4 - выводит Window", function() {
//         assert.equal(func4(),alert(window));
//     });
//
//     it("func4_1 - выводит '[object Window]', 'undefined', 'Petr'", function() {
//         assert.equal(func4_1(),alert('undefined'),alert('Petr'));
//     });
//
//     it("func5 - выводит 'Petr'", function() {
//         assert.equal(func5(),'Petr');
//     });
//
//     it("counter - счетчик", function() { //--------------------????????????????????????
//         assert.equal(c1(),1);
//         assert.equal(c1(),2);
//         assert.equal(c2(),1);
//         assert.equal(c2(),2)
//     });
//
//     it("A - выводит 6", function() {
//         assert.equal(A(1),6);
//     });
//
//     it("outside - выводит 6", function() {
//         assert.equal(outside()(20),20);
//     });
// });

describe("Проверка функций Counter из Lesson_5", function() {
    var c10 = new Counter();
    it("next - увеличивает значение счетчика на 2", function() {
        assert.equal(с10.next(), 2);//--------------------????????????????????????
        assert.equal(с10.next(), 4);
        assert.equal(с10.next(), 6);
    });

    it("back - уменьшает значение счетчика на 2", function() {
        assert.equal(с10.back(),4);//--------------------????????????????????????
        assert.equal(с10.back(),2);
    });

    it("reset - обнуляет значение счетчика", function() {
        assert.equal(с10.reset(), 0);
    });

    it("setCounterValue - выводит значние счетчика ", function() {
        assert.equal(с10.setCounterValue(5), 5);
    });
});

