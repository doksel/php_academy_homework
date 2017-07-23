var array = [1, 2, 3];
arr.push(function () {
    alert(this);
});
array[3]();
// This равен массиву array, в котором [1, 2, 3, function]
