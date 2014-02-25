function submitNewTitle(newTitle) {
  if (newTitle.length > 0) {
    Lists.insert({title: newTitle});
    document.getElementById('title').value = null;
  }
}

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
    var newTitle = document.getElementById('title').value;
    submitNewTitle(newTitle);
  },
  'keypress #title': function(e) {
    var newTitle = document.getElementById('title').value;
    if (e.which == 13) {
      submitNewTitle(newTitle);
    }
  }
});
