var arr = [1, -1, 2, -2, 3,4,5,6,7,8,9];

var positiveArr = arr.filter(function(number) {
    return number % 2 == 0;
});

alert( positiveArr );