// Второй вариант первогозадания
var listName, i, name, listGreetings, result, phrase;
listName = [];
listGreeting = [ 'привет', 'здравствуйте', 'добрый день', 'хай', 'приятно познакомится'];


function fillNamesList()
{
    name = prompt('Введите имена через запятую :');
    listName = name.split(/\s*,\s*/);
    return listName.sort();
}


function greetings()
{
    for(i = 0; i < listName.length; i++) {
        phrase = Math.round(Math.random() * (listGreetings.length - 1));
        result = listGreetings[phrase] + ' ' + listName[i];
        alert(result);
    }
}


fillNamesList();
greetings();
