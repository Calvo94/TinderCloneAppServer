var express= require('express');
var tCardController=require('./../controllers/tCardController');

var tCardsRouter = express.Router();

tCardsRouter.route('')
  .get(tCardController);

module.exports = tCardsRouter;
