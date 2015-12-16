(function() {
  'use strict';

  angular
    .module('codeAstra')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
