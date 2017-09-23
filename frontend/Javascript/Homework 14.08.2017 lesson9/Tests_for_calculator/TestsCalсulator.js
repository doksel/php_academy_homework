describe("Проверка функций Calculator", function() {
    var calc1 = new Calculator();
    it("sum - считает сумму двух чисел(2 и 4)", function() {
        assert.equal(calc1.sum(2,4), 6);
    });

    it("substract - считает разницу двух чисел(22 и 4)", function() {
        assert.equal(calc1.substract(22,4), 18);
    });

    it("multiply - считает сумму чисел(2, 4, 6)", function() {
        assert.equal(calc1.multiply(2,4,6), 48);
    });

    it("divide - считает деление двух чисел(8 и 2)", function() {
        assert.equal(calc1.divide(8,4), 2);
    });

    it("sqrt - считает корнеь квадратный из числа(4)", function() {
        assert.equal(calc1.sqrt(4), 16);
    });

    it("clearHistory - обнуляет историю калькулятора", function() {
        calc1.clearHistory();
        var arr = [];
        assert.equal(calc1.history.operation, arr);
    });

    it("showAction - обнуляет историю калькулятора", function() {
        calc1.clearHistory();

        assert.equal(calc1.history.showAction(), );
    });
});