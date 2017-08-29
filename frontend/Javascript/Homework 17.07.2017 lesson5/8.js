function outside() {
    var x = 10;
    function inside(x) {
        return x;
    }
    return inside;
}
result = outside()(20);
// result = 20, т.к. передаем аргумент 20, поэтому  х = 20 и var x = 10 брать не будет,
// а outside возвращает inside