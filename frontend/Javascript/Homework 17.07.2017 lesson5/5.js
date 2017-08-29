function func() {
    var name = "Ivan";
    return function () {
        var name = "Petr";
        console.log(name);
    }
}
// получить Ivan можно, если закомментировать или удалить строку var name = "Petr";