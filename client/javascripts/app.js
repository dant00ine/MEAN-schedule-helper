console.log('routes reach');
customerApp.config(function ($routeProvider) {
      $routeProvider

        .when('/customers', {
          templateUrl: '../partials/customers.html'
        })

        .when('/orders',{
            templateUrl: '../partials/orders.html'
        })

        .otherwise({
          templateUrl: '../partials/customers.html'
        });
        
    });