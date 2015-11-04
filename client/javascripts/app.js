
scribeApp.config(function ($routeProvider) {
  $routeProvider

    .when('/login', {
      templateUrl: '../partials/login.html'
    })

    .when('/admin_calendar', {
        controller: 'locations',
        templateUrl: '../partials/admin_calendar.partial.html'
    })

    .when('/user_calendar', {
        templateUrl: '../partials/user_calendar.partial.html'
    })

    .when('/profile', {
        templateUrl: '../partials/profile.partial.html'
    })
    
    .when('/createUser',{
        // console.log('createUser url triggered');
        templateUrl: '../partials/create_user.html'
    })

    .when('/createLocation',{
        templateUrl: '../partials/add_location.html'
    })

    .otherwise({
        templateUrl: '../partials/login.html'
    });
    
});