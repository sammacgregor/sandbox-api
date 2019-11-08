'Sprint strict';


//Sprint object constructor
var Sprint = function (Sprint) {
    this.sprint_id = Sprint.sprint_id;
    this.board_id = Sprint.board_id;
    this.sprint_goal = Sprint.sprint_goal;
    this.sprint_start_date = Sprint.sprint_start_date;
    this.sprint_end_date = Sprint.sprint_end_date;
    this.sprints_active = Sprint.sprints_active;
    this.sprint_story_points = Sprint.sprint_story_points;
    this.sprint_target_points = Sprint.sprint_target_points;
    this.created_date = Sprint.created_date;
    this.created_by = Sprint.created_by;
    this.updated_date = Sprint.updated_date;
    this.updated_by = Sprint.updated_by;
};

module.exports = Sprint;