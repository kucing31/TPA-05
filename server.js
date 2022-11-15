require('dotenv').config();
const express = require('express');
const app = express();

app.post('/users/registers',function(){});
app.post('/users/login',function(){});
app.get('/users:id',function(){});
app.post('/todos', function(){});
app.get('/todos', function(){});
app.get('/todos/:Id', function(){});
app.put('/todos/:Id', function(){});
app.patch('/todos/:Id', function(){});
app.delete('/todos/:Id', function(){});
app.delete('/todos', function(){});

app.listen(process.env.PORT || 8082, function() {
    console.info('server is online on port 8082');
});
