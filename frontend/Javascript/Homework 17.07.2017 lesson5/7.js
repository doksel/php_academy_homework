function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1);
// 6, т.к. вызываем функцию А, она получает аргумент. Далее также. Вконсоль приходят все значения
