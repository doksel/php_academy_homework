var object = {
    toString: function(){
        return "my0bject";
    },
    valueOf: function () {
    return 13;
    }
};
alert(object);//my0bject. Передаем в alert объект,ждет строку, преимущество toString, valueOf игнорируется
alert(object + 13);//26. есть в alert +, преимущество valueOf, toString игнориуется
alert("hello " + object);//hello13.  есть в alert +, преимущество valueOf, toString игнориуется

