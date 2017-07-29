var myObject = {};

function isObjectEmpty(obj)
{
    for (var i in obj) {
        return false;
    }
    return true;
}

isObjectEmpty(myObject);

// Второй вариант--------------------------

var myObject = {};

function isObjectEmpty2(obj)
{
    var keys = Object.keys(obj);
    if (keys.length == 0){
        return false;
    }
    return true;
}

isObjectEmpty2(myObject);