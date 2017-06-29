var x, y, oper, result;
x = +prompt("Введите первое число");
y = +prompt("Введите второе число");
oper = prompt("Введите тип операции");
result = 0;

showResult();

function showResult() {
    i = 1;
    while (i <= 3){
    if (oper == '+') {
        result = x + y;
    }else if(oper == '-'){
        result = x - y;
    }else if(oper == '*'){
        result = x * y;
    }else if(oper == '/'){
        result = x / y;
    }else{
            alert('Введите корректное значение');
        } i++;
    }
    return result;
    alert ('Пока!');
    }
alert (x + oper + y + '=' + result);