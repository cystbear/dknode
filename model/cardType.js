var CardTypeSchema = new Schema({
    id        : ObjectId
  , title     : String
});

mongoose.model('CardType', CardTypeSchema);
var CardType = mongoose.model('CardType');
