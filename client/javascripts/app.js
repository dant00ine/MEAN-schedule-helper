
scribeApp.config(function ($routeProvider) {
      $routeProvider

        // .when('/customers', {
        //   templateUrl: '../partials/customers.html'
        // })

        .when('/createUser',{
            // console.log('createUser url triggered');
            templateUrl: '../partials/create_user.html'
        })

        .otherwise({
            templateUrl: '../partials/login.html'
        });
        
    });