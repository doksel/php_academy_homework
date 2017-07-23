var myObject = {};

function isObjectEmpty(obj)
{
    for (var i in obj) {
        return false;
    }
    return true;
}

isObjectEmpty(myObject);