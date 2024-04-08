$(document).ready(function () {

  var app = $.spapp({
    defaultView: "#view_home",
    templateDir: "./views/",
    pageNotFound: "error_404"
  });

  app.route({ view: 'view_home', load: 'view_home.html' });
  app.route({ view: 'view_comissions', load: 'view_comissions.html' });
  app.route({ view: 'view_tutorials', load: 'view_tutorials.html' });
  app.route({ view: 'view_my_profile', load: 'view_my_profile.html' });

  app.run();

});