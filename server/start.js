Meteor.startup(function () {
  if (Lists.find().count() === 0) {
    var now = new Date().getTime();
    
    Lists.insert({
      title: "JavaScript Luncheon",
      location: "Innovation Tomorrow",
      date: "03/04/2014",
      submitted: now - 10 * 3600 * 1000,
    });

    Lists.insert({
      title: "JavaScript Luncheon",
      location: "Innovation Tomorrow",
      date: "03/04/2014",
      submitted: now - 10 * 3600 * 1000,
    });
  }

  if (Items.find().count() === 0) {
    Items.insert({name: 'Salad'});
  }
});