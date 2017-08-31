var express= require('express');
var tCardsRouter = require ('./routes/tCardsRouter');

var app = express();

app.listen(3000,function(){
  console.log('server is running on port 3000');
});

app.use('/tCards',tCardsRouter);
