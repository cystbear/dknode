var LanguageSchema = new Schema({
    id        : ObjectId
  , title     : String
});

mongoose.model('Language', LanguageSchema);
var Language = mongoose.model('Language');
