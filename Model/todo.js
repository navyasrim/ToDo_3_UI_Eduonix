var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ToDoSchema = new Schema({
    title: {type: String, required: true, max: 300},
    duebydate: {type: String, required: true},
    createdon: {type: String, required: true},
    status: {type: String, required: true},
    active:{type:String, required:true},
    username: {type: String, required: true},
});


// Export the model
module.exports = mongoose.model('todo', ToDoSchema);