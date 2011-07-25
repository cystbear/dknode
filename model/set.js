var SetSchema = new Schema({
    id        : ObjectId
  , title     : String
  , year      : Number
  , icon      : String
  , cards     : [ObjectId]
});

mongoose.model('Set', SetSchema);
var Set = mongoose.model('Set');
