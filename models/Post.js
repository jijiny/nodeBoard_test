const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const postSchema = mongoose.Schema({
    seq : {type:Number},
    title : {type:String, required:true},
    body : {type:String, required:true},
    createdAt : {type:Date, default:Date.now},
    updatedAt : {type:Date}
});

const post = mongoose.model('post', postSchema);

module.exports = post;