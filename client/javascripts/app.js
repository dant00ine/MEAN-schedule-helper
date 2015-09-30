
scribeApp.config(function ($routeProvider) {
  $routeProvider

    // .when('/customers', {
    //   templateUrl: '../partials/customers.html'
    // })
    .when('/calendar', {
        templateUrl: '../partials/calendar.partial.html'
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