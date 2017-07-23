var listName, i, x, listGreetings, result, phrase;
listName = [];
listGreetings = [ 'привет', 'здравствуйте', 'добрый день', 'хай', 'приятно познакомится'];


function fillNamesList()
{
    for(i = 0; i < 7; i++){
        x = prompt('Введите имя :');
        listName[i] = x;
    }return listName.sort();
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