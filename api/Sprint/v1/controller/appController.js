'use strict';

var sprint = require('../model/appModel.js');

exports.list_all_sprints = function(req, res) {
  sprint.getAllsprint(function(err, sprint) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', sprint);
    res.send(sprint);
  });
};


exports.get_items_by_sprint = function(req, res) {
  sprint.getItemsBySprintID(req.params.SprintID, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.get_sprint = function(req, res) {
  sprint.getSprintBySprintID(req.params.sprintID, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};


exports.create_a_sprint = function(req, res) {
  var new_sprint = new sprint(req.body);

  //handles null error 
   if(!new_sprint.Summary || !new_sprint.sprintTypeID || !new_sprint.sprintStatusID || !new_sprint.sprintPriorityID){
            console.log(JSON.stringify(req.body));
            res.status(400).send({ error:true, message: 'Mandatory attributes have not been provided'});

        }
else{
  
  sprint.createSprint(new_sprint, function(err, sprint) {
    
    if (err)
      res.send(err);
    res.json(sprint);
  });
}
};





exports.update_a_sprint = function(req, res) {
  sprint.updateById(req.params.sprintID, new sprint(req.body), function(err, sprint) {
    if (err)
      res.send(err);
    res.json(sprint);
  });
};


exports.delete_a_sprint = function(req, res) {


  sprint.remove( req.params.sprintID, function(err, sprint) {
    if (err)
      res.send(err);
    res.json({ message: 'sprint successfully deleted' });
  });
};