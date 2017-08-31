var express= require('express');

var tCardsRouter = express.Router();

tCardsRouter.route('')
  .get(function (req, res) {
    res.send('Showing list of movies');
  })

module.exports = tCardsRouter;
