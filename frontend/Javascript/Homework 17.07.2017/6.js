var counter = 0;
function counterMaker() {
    return function () {
        return ++counter;
    };
}
var c1 = counterMaker();
var c2 = counterMaker();
c1(); c1(); c1(); c1();
c2(); c2();
//вызывая счетчики, они будут продолжать друг друга, т.к. у них будет общая глобальная
// переменная counter. Она будет сохраняться после каждого вызова и оба счетчика будут
// брать её значение. Т.е. не будет отдельных counter.