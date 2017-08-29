var array = [1, 2, 3];
arr.push(function () {
    alert(this);
});
array[3]();
// This равен массиву array, в котором [Tests_for_calculator, 2, 3, function]
