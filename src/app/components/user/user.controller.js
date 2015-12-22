(function(){ 
  'use strict';

  angular.module('codeAstra')
  .controller('tingu', UserCtrl);

  function UserCtrl() {
    var User = this;

    function init() {
      User.initializeForms();
    }

    User.initializeForms = function() {
      User.loginUser = {};
      User.signupUser = {};
    }  

    function login() {
      // var user = 
    }

    function signup() {

    }

    init();

    // User.next = function() {
    //   $state.go("about.details")
    // }
  }  

})();