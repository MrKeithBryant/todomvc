const express = require('express');
const app = express();

const Todos = {todos: ['all my todos']};
const newTodo = {todo: 'file posted'};
const deleteTodo = {todo: 'file deleted'};
const putTodo = {todo: 'file updated'};

/*app.get('/', function(req, res) {
    res.json({title: 'Imminent json data', completed: false });
});*/
app.get('/', function(req, res) {
  res.json(Todos);
});

app.post('/', function(req, res) {
    res.json(newTodo);
});

app.delete('/app/todos/:id', function(req, res) {
    res.json(deleteTodo);
});

app.put('/app/todos/book/:id', function(req, res) {
    res.json(putTodo);
});

app.listen(3000, function() {
  console.log('listening');
});

//app.get("/app/todos", function(req, res){
//res.json([])''
//});
//must return json
