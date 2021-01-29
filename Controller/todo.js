var ToDo = require('../Model/todo');

//Testing TestAPI http://localhost:1234/todo/test
exports.test = function (req, res) {
    res.send('Greetings from the Test controller of todo!');
   
};


//Creating Todo list data

exports.todo_create = function (req, res) {
    debugger;
    var todo = new ToDo(
        {
            title: req.body.title,
            duebydate:  req.body.duebydate,
            createdon : req.body.createdon,
            status : req.body.status,
            active : req.body.active,
            username : req.body.username

        }
    );

todo.save(function (err) {
if (err){
    return next(err);
}
res.send('Todo List Created Successfully')
})
};


// //Getting all to do data list including active status = 0,1

 exports.todo_detailsall = function (req, res) {
  
     ToDo.find(function (err, todo) {
         if (err) return next(err);
         res.send(todo);
  })
};

//getting data based on id

exports.todo_details = function (req, res) {
    ToDo.findById(req.params.id, function (err, todo) {
        if (err) return next(err);
        res.send(todo);
    })
};


//update


exports.todo_update = function (req, res) {
    ToDo.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Todo details udpated.');
    });
};

//update many 
//ToDo.updateMany()
//delete

exports.todo_delete = function (req, res) {
    ToDo.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

//deleteupdate to make status inactive

exports.todo_delupdate = function (req, res) {
    ToDo.findByIdAndUpdate(req.params.id,  {active : "0"},  function (err, todo) {
        if (err) return next(err);
        res.send('Todo details deleted succesfully.');
    });
};
