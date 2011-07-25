var ColorSchema = new Schema({
    id        : ObjectId
  , title     : String
});

mongoose.model('Color', ColorSchema);
Color = mongoose.model('Color');
