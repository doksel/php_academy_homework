i = 1;
while (i <= 3){
var x, y, oper, result;
x = +prompt("Введите первое число");
y = +prompt("Введите второе число");
oper = prompt("Введите тип операции");
result = 0;

    showResult(x, y);
    alert (x + oper + y + '=' + result);


function showResult() {

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
        }return result;

    }i++;
if (i == 4) {
    break;
}
}
alert ('Пока!');

