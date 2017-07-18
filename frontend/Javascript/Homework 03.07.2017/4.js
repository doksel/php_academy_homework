var student = {
    name: 'Petr',
    func: function () {
        return this;
    }
};
alert(student.func().name);
// Результат: alert выведет 'Petr', т.к. this вернет в func: name='Petr',func:function()