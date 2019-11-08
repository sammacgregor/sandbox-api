'use strict';

var Sprint = require('./appModel.js');

var sql = require('../../db.js');


exports.addSprint = function (req, res) {
  var newSprint = new Sprint(req.body);

  //handles null error 
  if (!newSprint.board_id) {
    console.log(JSON.stringify(req.body));
    res.status(400).send({ error: true, message: 'Mandatory attributes have not been provided' });

  }
  else {




    sql
      .query("INSERT INTO Sprint.Sprint (Board_ID, Sprint_Start_Date, Sprint_End_Date, Sprint_Active, Sprint_Story_Points, Sprint_Target_Points, Created_Date, Created_By, Updated_Date, Updated_By) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING sprint_id", [
      newSprint.board_id,
      newSprint.sprint_start_date,
      newSprint.sprint_end_date,
      newSprint.sprint_active,
      newSprint.sprint_story_points,
      newSprint.sprint_target_points,
      newSprint.created_date,
      newSprint.created_by,
      newSprint.updated_date,
      newSprint.updated_by
      ]).then(result => {
        newSprint.sprint_id = JSON.stringify(result.rows[0].sprint_id);

        return res.send({ error: false, data: newSprint, message: 'addSprint' })

      })
      .catch(e => {
        console.error(e.stack)
        res.send({ error: true, data: e.stack, message: 'addSprint' })
      })



  }
};
