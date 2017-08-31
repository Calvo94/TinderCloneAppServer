var tCard = require ('./../models/tCardModel');

var get = function (req, res) {
  tCard.find(function(err,tCards){
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

module.exports = get;
