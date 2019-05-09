const Task = require('../models/Task')
module.exports = {
  getIndex: function (req, res) {
    // TODO: get all open, inProgress and finished tasks, pass them to the index view and render it
    Task.find({})
    .then(allTasks => {
      const openTasks = allTasks.filter(t=>t.status ==='Open');
      const inProgressTasks = allTasks.filter(t=>t.status==='In Progress')
      const finishedTasks = allTasks.filter(t=>t.status==='Finished');
      return res.render('index', {openTasks,inProgressTasks,finishedTasks})
    })
    
  },
  getCreate: function (req, res) {
    // TODO: render the create view
    return res.render('create')
  },
  postCreate: function (req, res) {
    // TODO: create new task and redirect to the index view
    Task.create(req.body)
    .then((createdTask)=>{
      console.log(createdTask);
      return res.redirect('/')
    }) 
    
  },
  getEdit: function (req, res) {
    // TODO: get the task for editing, pass it to the edit view and render it
    let id = req.params.id;
    Task.findById(id)
    .then((task)=>{
      task.open=task.status==='Open';
      task.inProgress=task.status==='In Progress';
      task.finished===task.status==='Finished';
      return res.render('edit', {task})
    });
  },
  postEdit: function (req, res) {
    // TODO: update the task and redirect to index view
    let id = req.params.id;
    let updatedTask = req.body;
    Task.findByIdAndUpdate(id,updatedTask)
    .then(updatedTask=>{
      return res.redirect('/');
    })

  },
  getDelete: function (req, res) {
    // TODO: get the task for deleting, pass it to the detele view and render it
    let id = req.params.id;
    Task.findById(id)
    .then((task)=>{
      task.open=task.status==='Open';
      task.inProgress=task.status==='In Progress';
      task.finished===task.status==='Finished';
      return res.render('delete', {task})
    });

  },
  postDelete: function (req, res) {
    // TODO: delete the task and redirect to the index view
    let id = req.params.id;
    
    Task.findByIdAndRemove(id)
    .then(()=>{
      return res.redirect('/');
    })
  }
};