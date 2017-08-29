function Calculator() {

    Object.defineProperty(history, "operation", {writable: false});

    this.history = {
        operation: [],

        showAction: function(i) {
            var getStringResult = 'Операци: ' + this.operation[i].op + '. Значения: ' + this.operation[i].values.join(',') + '. Результат: ' + this.operation[i].result;
            if (Calculator.lang === 'ua') {
                getStringResult = 'Операція: ' + this.operation[i].op + '. Значення: ' + this.operation[i].values.join(',') + '. Результат: ' + this.operation[i].result;
            } else if (Calculator.lang === 'en') {
                getStringResult = 'Operation: ' + this.operation[i].op + '. Values: ' + this.operation[i].values.join(',') + '. Result: ' + this.operation[i].result;
            }
            return getStringResult;
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
}

Calculator.prototype.tofixed = 2;
Calculator.prototype.lang = 'ru';

Calculator.prototype.sum = function () {
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
    this.history.operation.push(this._saveHistory(langValues, arguments, result));
    return result;
};
Calculator.prototype.substract = function () {
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
    this.history.operation.push(this._saveHistory(langValues, arguments, result));
    return result;
};

Calculator.prototype.multiply = function () {
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
    this.history.operation.push(this._saveHistory(langValues, arguments, result));
    return result;
};

Calculator.prototype.divide = function () {
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
    this.history.operation.push(this._saveHistory(langValues, arguments, result));
    return result;
};

Calculator.prototype.sqrt = function (arg) {
    var result = (arg * arg).toFixed(Calculator.tofixed);
    var langValues = 'ДЕЛЕНИЕ';
    if (Calculator.lang === 'ua') {
        langValues = 'КОРІНЬ КВАДРАТНИЙ';
    } else if (Calculator.lang === 'en') {
        langValues = 'SQRT';
    }
    this.history.operation.push(this._saveHistory(langValues, arguments, result));
    return result;
};
Calculator.prototype._saveHistory = function (nameOperation, values, result) {
    var arrayValues = [];
    for (var i = 0; i < values.length; i++) {
        arrayValues[i] = values[i];
    }
    return {op: nameOperation, values: arrayValues, result: result};
};

Calculator.prototype.clearHistory = function () {
    this.history.operation = [];
};

var calc1 = new Calculator();