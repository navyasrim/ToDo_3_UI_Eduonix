var express = require('express');
var router = express.Router();
var todo_controller = require('../Controller/todo');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', todo_controller.test);

//to show all data from database
router.get('/', todo_controller.todo_detailsall);
//create or insert record to databse
router.post('/create', todo_controller.todo_create);


router.get('/:id', todo_controller.todo_details);

router.put('/:id/update', todo_controller.todo_update);
//deletes all data
router.delete('/:id/delete', todo_controller.todo_delete);

//delete method to make record inactive(active=0) but still record exists
router.delete('/:id/deleteupdate', todo_controller.todo_delupdate);
module.exports = router;