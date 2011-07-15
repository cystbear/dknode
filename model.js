var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CommentsSchema = new Schema({
    title     : String
  , body      : String
  , date      : Date
});

var BlogPostSchema = new Schema({
    author    : ObjectId
  , title     : String
  , body      : String
  , date      : Date
  , comments  : [CommentsSchema]
  , meta      : {
        votes : Number
      , favs  : Number
    }
});

mongoose.model('BlogPost', BlogPostSchema);
var BlogPost = mongoose.model('BlogPost');

function simpleCrud() {
    var conn = mongoose.connect('mongodb://localhost/node');

    var myBlogPost = new BlogPost();
    myBlogPost.title = 'hello guys';
    myBlogPost.save(function(error){
        if (!error) {
            console.log('hello guys has been wrote');
        } else {
            console.log(error);
        }
    });
}

exports.simpleCrud = simpleCrud;
