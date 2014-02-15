Meteor.startup(function () {
  if (Lists.find().count() === 0) {
    Lists.insert({name: "Luncheon"});
  }

  if (Items.find().count() === 0) {
    Items.insert({name: 'Salad'});
  }
});