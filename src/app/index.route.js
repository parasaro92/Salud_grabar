(function() {
  'use strict';

  angular
    .module('codeAstra')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })

      .state('user', {
        url: '/user',
        templateUrl: 'app/components/user/user.html',
        controller: 'tingu',
        controllerAs: 'user'
      })

      .state('user.register', {
        url: '/register',
        templateUrl: 'app/components/user/register.html'
      })

      .state('user.details', {
        url: '/details',
        templateUrl: 'app/components/user/details.html'
      })

      .state('track', {
        url: '/track',
        templateUrl: 'app/components/track/track.html',
        controller: 'track'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
