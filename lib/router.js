Router.configure({
    layoutTemplate: 'MainLayout'
});

Router.route('/', function() {

    this.render('home');

});

Router.route('/login', function() {

    this.render('login');

});

