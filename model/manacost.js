var ManacostSchema = new Schema({
    id        : ObjectId
  , title     : String
});

mongoose.model('Manacost', ManacostSchema);
var Manacost = mongoose.model('Manacost');
