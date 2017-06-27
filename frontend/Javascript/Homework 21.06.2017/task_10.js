alert (showResult());
function showResult() {
    var x, y, oper, result;
    x = +prompt("Введите первое число");
    y = +prompt("Введите второе число");
    oper = prompt("Введите тип операции");
    result = 0;
    if (oper == '+') {
        result = x + y;
    }else if(oper == '-'){
        result = x - y;
    }else if(oper == '*'){
        result = x * y;
    }else if(oper == '/'){
        result = x / y;
    }else{
        i = 1;
        while (i <= 3){
            alert('Введите корректное значение');
            i++;
        }
        alert ('Пока!');
    }
    alert (x + oper + y + '=' + result);
    return result;
}
