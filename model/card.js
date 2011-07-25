var CardSchema = new Schema({
    id               : ObjectId
  , title            : String
  , set              : ObjectId
  , rarity           : ObjectId
  , image            : String
  , manaCost         : [ObjectId]
  , type             : ObjectId
  , text             : String
  , artText          : String
  , artist           : String
  , color            : ObjectId
  , language         : ObjectId
  , previousVersions : [ObjectId]
});

mongoose.model('Card', CardSchema);
var Card = mongoose.model('Card');

