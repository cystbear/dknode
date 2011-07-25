var RaritySchema = new Schema({
    id        : ObjectId
  , title     : String
});

mongoose.model('Rarity', RaritySchema);
var RaritySchema = mongoose.model('Rarity');
