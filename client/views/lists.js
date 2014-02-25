Template.lists.lists = function () {
  return Lists.find({});
};

Template.lists.events({
  'click .delete-list': function(e) {
    e.preventDefault();

    if (confirm("Delete list?")) {
      Lists.remove(this._id);
    }
  },
  'click .add-list': function() {
    var new_list_name = document.getElementById('title').value;
    Lists.insert({title: new_list_name});
    document.getElementById('title').value = null;
  }
});
