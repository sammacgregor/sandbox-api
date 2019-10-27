'item strict';

//Item object constructor
var Item = function (item) {
    this.item_id = item.item_id;
    this.item_type_id = item.item_type_id;
    this.item_priority_id = item.item_priority_id;
    this.item_status_id = item.item_status_id;
    this.sprint_id = item.sprint_id;
    this.board_id = item.board_id;
    this.assignee_id = item.assignee_id;
    this.reporter_id = item.reporter_id;
    this.summary = item.summary;
    this.description = item.description;
    this.team_id = item.team_id;
    this.created_by = item.created_by;
    this.created_date = item.created_date;
    this.updated_by = item.updated_by;
    this.updated_date = item.updated_date;


};

module.exports = Item;


