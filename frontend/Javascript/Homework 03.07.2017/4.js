var o1 = {a:1,b:2}, s1 = JSON.stringify(o1),
o2 = {a:1,b:2}, s2 = JSON.stringify(o2);

function isEqual(obj1, obj2) {
    if (obj1 == obj2){
        alert('Объекты равны')
    }
}

isEqual(s1, s2);

// Второй вариант, рекурсивно----------------------------

var obj1 = {a:1,b:2}, objs1 = JSON.stringify(obj1),
    obj2 = {a:1,b:2}, objs2 = JSON.stringify(obj2);

function isEqual(obj1, obj2) {
    return (objs1 == objs2);

    }

isEqual(obj1, obj2);
