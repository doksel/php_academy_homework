// var x, y, oper, result;
// x = +prompt("Введите первое число");
// y = +prompt("Введите второе число");
// oper = prompt("Введите тип операции");
//
// function showResult() {
//     alert(x + oper + y + "=" + result);
// }
// // if (oper == "+" && x == "number" && y == "number"){
// //     result = x + y;
// //     alert(showResult());
// // }else if(oper == "-" && x == "number" && y == "number"){
// //     result = x - y;
// //     alert(showResult());
// // }else if(oper == "/" && x == "number" && y == "number"){
// //     result = x / y;
// //     alert(showResult());
// // }else if(oper == "*" && x == "number" && y == "number"){
// //     result = x * y;
// //     alert(showResult());
// // }else{
// //     var i = 0;
// //     while (i<3){
// //         alert("Введите корректные значения");
// //         i++;
// //     }
// // alert("Пока!")
// // }
// switch(oper) {
// case '+':
//     result==x+y;
//     break;
// case '-':
//     result==x-y;
//     break;
// case '*':
//     result==x*y;
//     break;
// case '/':
//     result==x/y;
// };
// alert(result);
var x = +prompt("Введите x?",100);
var y = +prompt("Введите y?",100);
var z = +prompt("введите 1,что бы + 2,что бы - 3,что бы *,4 что бы /");
var result;

switch(z) {
    case 1:
        result==x+y;
        break;
    case 2:
        result==x-y;
        break;
    case 3:
        result==x*y;
        break;
    default :
        result==x/y;
};
alert(result);