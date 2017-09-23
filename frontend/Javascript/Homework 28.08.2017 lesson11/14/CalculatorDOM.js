
// var x = document.getElementsByClassName('myTableNum');
myTableNum.onclick = function(event) {
    var target = event.target; // где был клик?
    // if (!target.classList.contains('num')) return; //
    if (target.classList.contains !== 'num') return;
    var getNum = target.innerHTML;
    var valueScreen = screen;
    valueScreen.innerHTML += getNum;
};
// function screenNum() {
//     var valueScreen = screen;
//     valueScreen.innerHTML += getNum;
// }