Calculator.tofixed = 2;
Calculator.lang = 'ru';

function Calculator() {

    this.clearHistory = function () {
       this.history.operation = [];
    };

    Object.defineProperty(history, "operation", {writable: false});

    this.history = {
        operation: [],

        showAction: function (i) {
            return translateOperation(i).call(this);
        },
        showAllActions: function () {
            for (var i = 0; i < this.operation.length; ++i ){
                console.log(this.showAction(i));
            }
        },
        CONST: 1,
        next: function () {
            return this.showAction(this.CONST++);
        },
        prev: function () {
            return this.showAction(this.CONST--);
        }
    };

    this.sum = function () {
        var sum = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            sum += arguments[i];
        }
        var langValues = 'СУММА';
        if (Calculator.lang === 'ua') {
            langValues = 'СУМА';
        } else if (Calculator.lang === 'en') {
            langValues = 'SUM';
        }
        var result = sum.toFixed(Calculator.tofixed);
        this.history.operation.push(saveHistory(langValues, arguments, result));
        return result;
    };

    this.substract = function () {
        var substract = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            substract -= arguments[i];
        }
        var langValues = 'РАЗНИЦА';
        if (Calculator.lang === 'ua') {
            langValues = 'РІЗНИЦЯ';
        } else if (Calculator.lang === 'en') {
            langValues = 'SUBSTRACT';
        }
        var result = substract.toFixed(Calculator.tofixed);
        this.history.operation.push(saveHistory(langValues, arguments, result));
        return result;
    };

    this.multiply = function () {
        var multiply = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            multiply *= arguments[i];
        }
        var langValues = 'УМНОЖЕНИЕ';
        if (Calculator.lang === 'ua') {
            langValues = 'МНОЖЕННЯ';
        } else if (Calculator.lang === 'en') {
            langValues = 'MULTIPLY';
        }
        var result = multiply.toFixed(Calculator.tofixed);
        this.history.operation.push(saveHistory(langValues, arguments, result));
        return result;
    };

    this.divide = function () {
        var divide = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            divide /= arguments[i];
        }
        var langValues = 'ДЕЛЕНИЕ';
        if (Calculator.lang === 'ua') {
            langValues = 'ДІЛЕННЯ';
        } else if (Calculator.lang === 'en') {
            langValues = 'DIVIDE';
        }
        var result = divide.toFixed(Calculator.tofixed);
        this.history.operation.push(saveHistory(langValues, arguments, result));
        return result;
    };

    this.sqrt = function (arg) {
        var result = (arg * arg).toFixed(Calculator.tofixed);
        var langValues = 'КОРЕНЬ КВАДРАТНЫЙ';
        if (Calculator.lang === 'ua') {
            langValues = 'КОРІНЬ КВАДРАТНИЙ';
        } else if (Calculator.lang === 'en') {
            langValues = 'SQRT';
        }
        this.history.operation.push(saveHistory(langValues, arguments, result));
        return result;
    };

    function saveHistory(nameOperation, values, result) {
        var arrayValues = [];
        for (var i = 0; i < values.length; i++) {
            arrayValues[i] = values[i];
        }
        return {op: nameOperation, values: arrayValues, result: result};
    }

    function translateOperation() {
        var getStringResult = '';
        switch (Calculator.lang) {
            case 'en':return getStringResult = 'Operation: ' + this.operation[i].op + '. Values: ' + this.operation[i].values.join(',') +
                '. Result: ' + this.operation[i].result;break;
            case 'ua':return getStringResult = 'Операція: ' + this.operation[i].op + '. Значення: ' + this.operation[i].values.join(',') +
                '. Hезультат: ' + this.operation[i].result;break;
            case 'ru':return getStringResult = 'Операцbя: ' + this.operation[i].op + '. Значенbя: ' + this.operation[i].values.join(',') +
                '. Hезультат: ' + this.operation[i].result;break;

        }
        console.log()
    }
}

var calc1 = new Calculator();
