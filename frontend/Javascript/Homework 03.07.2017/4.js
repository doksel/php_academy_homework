// var $object1 = {'a' : 'a', 'b' : 'b'};
// var $object2 = {'a' : 'a', 'b' : 'b'};
// var $obj2 = JSON.stringify(object1);
// var $obj2 = JSON.stringify(object2);
//
// function isEqual(obj1, obj2) {
//     if (obj1 == obj2){
//         alert('Обїекті равні')
//     }
// }
//
// isEqual(obj1, obj2);


var o1 = {a:1,b:2}, s1 = JSON.stringify(o1),
o2 = {a:1,b:2}, s2 = JSON.stringify(o2);

function isEqual(obj1, obj2) {
    if (obj1 == obj2){
        alert('Обїекті равні')
    }
}

isEqual(s1, s2);