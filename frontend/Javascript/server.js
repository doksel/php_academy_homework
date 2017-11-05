var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var ws = require('express-ws')(app);
var fs = require('fs');

var subscribers = {};

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/ex1', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex1.html'));
});

app.get('/ex2', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex2.html'));
});

app.get('/ex3', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex3.html'));
});

app.get('/ex4', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex4.html'));
});

app.get('/ex5', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex5.html'));
});

app.get('/ex6', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex6.html'));
});

app.get('/ex7', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex7.html'));
});

app.get('/ex8', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex8.html'));
});

app.get('/ex9', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex9.html'));
});

app.get('/ex10', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex10.html'));
});

app.get('/ex11', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex11.html'));
});

app.get('/ex12', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex12.html'));
});

app.get('/ex13', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex13-14.html'));
});

app.get('/ex14', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex13-14.html'));
});

app.get('/ex15', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex15.html'));
});

app.get('/ex16', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex16.html'));
});

app.get('/ex17', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex17.html'));
});

app.get('/ex18', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex18.html'));
});

app.get('/ex19', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex19-20.html'));
});

app.get('/ex20', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex19-20.html'));
});

app.get('/ex21', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex21.html'));
});

app.get('/ex22', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/ex22.html'));
});

app.get('/students', function(req, res) {
  setTimeout(() => {
      res.sendFile(path.join(__dirname + '/students.json'));
  }, 2000);
});

app.get('/file', function(req, res) {
  res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Cache-Control': 'no-cache'
    });

    var i = 0;

    var timer = setInterval(write, 1000);
    write();

    function write() {
      res.write(new Array(1000).join(++i + '') + ' ');
      if (i == 9) {
        clearInterval(timer);
        res.end();
      }
    }
});

app.get('/submit', function(req, res) {
  res.send(req.query);
});

app.post('/submit', function(req, res) {
  res.send(req.body);
});

app.post('/submit-form-data', upload.fields([]), function(req, res) {
  res.send(req.body);
});

app.post('/create-student', upload.fields([]), function(req, res) {
  res.send(req.body);
});

app.post('/upload-file', function(req, res) {
  var length = 0;
  req.on('data', function(chunk) {
      // ничего не делаем с приходящими данными, просто считываем
      length += chunk.length;
      console.log(length);
      // if (length > 50 * 1024 * 1024) {
      //   res.statusCode = 413;
      //   res.end("File too big");
      // }
    }).on('end', function() {
      res.end('ok');
    });
});

app.post('/publish', function(req, res) {
  req.setEncoding('utf8');
   var message = '';
   req.on('data', function(chunk) {
     message += chunk;
   }).on('end', function() {
     publish(message); // собственно, отправка
     res.end("ok");
   });
});

app.get('/subscribe', function(req, res) {
  onSubscribe(req, res); // собственно, подписка
  return;
});

function publish(message) {
  console.log("есть сообщение, клиентов:" + Object.keys(subscribers).length);

  for (var id in subscribers) {
    //console.log("отсылаю сообщение " + id);
    var res = subscribers[id];
    res.end(message);
  }

  subscribers = {};
}

function onSubscribe(req, res) {
  var id = Math.random();

  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  res.setHeader("Cache-Control", "no-cache, must-revalidate");

  subscribers[id] = res;
  console.log("новый клиент " + id + ", клиентов:" + Object.keys(subscribers).length);

  req.on('close', function() {
    delete subscribers[id];
    console.log("клиент "+id+" отсоединился, клиентов:" + Object.keys(subscribers).length);
  });
}

app.ws('/echo', function(ws, req) {
  console.log('WS connected');
  ws.on('message', function(msg) {
    ws.send(msg);
  });
});

(function ex18() {
  var WebSocketServer = new require('ws');

  // подключенные клиенты
  var clients = {};

  // WebSocket-сервер на порту 8081
  var webSocketServer = new WebSocketServer.Server({
    port: 3001
  });
  webSocketServer.on('connection', function(ws) {
    var id = Math.random();
    clients[id] = ws;
    console.log("новое соединение " + id);

    ws.on('message', function(message) {
      console.log('получено сообщение ' + message);

      for (var key in clients) {
        clients[key].send(message);
      }
    });

    ws.on('close', function() {
      console.log('соединение закрыто ' + id);
      delete clients[id];
    });
  });
})()

app.get('/my-students', function(req, res) {
  var file = fs.readFileSync('students.json');
  var students = JSON.parse(file);

  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache'
  });

  var i = 0;

  var timer = setInterval(write, 1000);
  write();

  function write() {
    i++;

    if (students.length === i-1) {
      res.write('event: bye\ndata: до свидания\n\n');
      clearInterval(timer);
      res.end();
      return;
    }

    res.write('data: ' + JSON.stringify(students[i-1]) + '\n\n');
  }
});

app.listen(3000, function () {
  console.log('Приклад застосунку, який прослуховує 3000-ий порт!');
});
