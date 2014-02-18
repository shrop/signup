Template.lists.lists = function () {
  return Lists.find({});
};

Template.lists.events({
  'click .delete-list': function(e) {
    e.preventDefault();
    
    if (confirm("Delete list?")) {
      Lists.remove(this._id);
    }
  }
});
