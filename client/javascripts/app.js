
scribeApp.config(function ($routeProvider) {
      $routeProvider

        // .when('/customers', {
        //   templateUrl: '../partials/customers.html'
        // })

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