mongoose = require('mongoose');
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var Set = require('./set');
var Card = require('./card');

var Rarity = require('./rarity');
var Manacost = require('./manacost');
var CardType = require('./cardType');
var Color = require('./color');
var Language = require('./language');

mongoose.connect('mongodb://localhost/node');
