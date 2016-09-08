(function() {
  'use strict';

  angular
    .module('aDevKitBowerScss')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1473173567117;
  }
})();
