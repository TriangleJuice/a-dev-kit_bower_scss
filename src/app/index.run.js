(function() {
  'use strict';

  angular
    .module('aDevKitBowerScss')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
