var TinderCard = require ('./../models/tCardModel');

var get = function (req, res) {
  TinderCard.find(function(err,tCards){
    if(err){
      res.status(500);
      res.send("Internal server error");
    }
    else{
      res.status(200);
      res.send(tCards);
    }
  })
};

var add = function(req,res){
  var tCard=new TinderCard(req.body);
    tCard.save(function(err){
      if(err){
        res.status(500);
        res.send("Failed");
      }
      else{
        res.status(201);
        res.send(tCard);
      }
    })
}

module.exports = {
  add: add,
  get: get
};
