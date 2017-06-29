function fact() {
    var result = 1;
    for (var i = 5; i >= 1; i--){
        result = result * i;
    }
        return result;
}
document.write(fact());

document.write('<br>');

function pow() {
    const NUMBER = 2;
    var result = 1; degree = 4;
    for (var i = 1; i <= degree; i++){
        result *= NUMBER;
    }
    return result;
}
document.write(pow());