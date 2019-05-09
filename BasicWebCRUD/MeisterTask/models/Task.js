const mongoose = require('mongoose');

let  taskSchema =   new mongoose.Schema({
    title:{type:'string', require:'true'},
    status:{type:'string',require:'true', enum:['Finished', 'In Progress', 'Open']} 
});
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;