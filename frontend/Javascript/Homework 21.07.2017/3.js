var student = {
    name: 'Stepan',
    value: this
};
alert(student.value.name);
// Результат: alert ничего не выведет(будет пустой), т.к. this в value ничего не передаст