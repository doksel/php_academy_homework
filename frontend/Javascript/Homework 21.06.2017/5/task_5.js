// function pow(a,b) {
//     var x = Math.pow(a, b);
//     document.write(x);
// }
// pow(2,2);
// document.write('<br>');
// pow(2,5);
function pow(a,b)
{
    const A = a;
    var result = 1; degree = b;
    for (var i = 1; i <= degree; i++){
        result *= A;
    }
    document.write(result);
    return result;
}
pow(2,3);
document.write('<br>');
pow(2,5);