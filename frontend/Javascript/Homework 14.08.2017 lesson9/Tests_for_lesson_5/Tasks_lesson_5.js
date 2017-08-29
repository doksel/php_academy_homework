// var surname = "Ivanov";
// function getFullname(name, surname) {
//     return name + " " + surname;
// }
// getFullname('Ivan');
// // alert выведет Ivan undefined, т.к. когда срабатывает alert функция
// // именная определена, а переменная со значение undefined, до
// // неё мы ещё не дошли.
// var name2 = "Petr";
// function getName2() {
//     if (1){
//         name2 = "Ivan";
//     } else {
//         var name2 = "Stepan";
//     }
//     console.log(name2);
// }
// getName2();
// // Первый alert выведет Ivan, т.к. Tests_for_calculator = true, значит внутри фунции name = "Ivan"
// // Второй alert выведет Petr, т.к. глобальная var name = "Petr", а Ivan и Stepan локальные
//
// var name3 = "Petr";
// function getName3() {
//     if (1){
//         name3 = "Ivan";
//     } else {
//         name3 = "Stepan";
//     }
//     console.log(name3);
// }
// getName3();
// //первый alert внутри функции выведет Ivan, т.к. Tests_for_calculator = true, и мы перезаписываем глобальную переменную name
// //второй alert выведет Ivan, т.к. name = Petr изменен на Ivan
//
// function func4() {
//     console.log(window);
// }
// func4();
// function func4_1() {
//     console.log(window);
//     var window = {name: 'Petr', toString: function(){return this.name;}};
//     console.log(window);
// }
// func4_1();
// //выведет objectWindow, т.к. принимает значение гловального объекта Window
// //выведет undefined, т.к. локальная переменная объявлена внутри функции, но она ещё равна undefined
// //выведет Petr,т.к. переменная window уже принимает значение,а toString приводит к строке, то что вернула функция
//
// function func5() {
//     var name5 = "Ivan";
//     return function () {
//         var name5 = "Petr";
//         console.log(name5);
//     }
// }
// // получить Ivan можно, если закомментировать или удалить строку var name = "Petr";
//
// var counter = 0;
// function counterMaker() {
//     return function () {
//         return ++counter;
//     };
// }
// var c1 = counterMaker();
// var c2 = counterMaker();
// c1(); c1(); c1(); c1();
// c2(); c2();
// //вызывая счетчики, они будут продолжать друг друга, т.к. у них будет общая глобальная
// // переменная counter. Она будет сохраняться после каждого вызова и оба счетчика будут
// // брать её значение. Т.е. не будет отдельных counter.
//
// function A(x) {
//     function B(y) {
//         function C(z) {
//             console.log(x + y + z);
//         }
//         C(3);
//     }
//     B(2);
// }
// A(1);
// // 6, т.к. вызываем функцию А, она получает аргумент. Далее также. Вконсоль приходят все значения
//
// function outside() {
//     var x = 10;
//     function inside(x) {
//         return x;
//     }
//     return inside;
// }
// result = outside()(20);
// // result = 20, т.к. передаем аргумент 20, поэтому  х = 20 и var x = 10 брать не будет,
// // а outside возвращает inside

function Counter() {
    var counter = 0;
    var step = 2;

    return {
        next: function() {
            return counter += step;
        },
        reset: function() {
            return counter = 0;
        },
        setCounterValue: function(value) {
            counter = value;
        },
        back: function() {
            return counter -= step;
        }
    }
}

var c10 = new Counter();