var express= require('express');

var app = express();

app.listen(3000,function(){
  console.log('server is running on port 3000');
});

var tCardsRouter = express.Router();

tCardsRouter.route('')
.get(function(req,res){
  res.send("List of Tinder Cards");
});

app.use('/tCards',tCardsRouter);
