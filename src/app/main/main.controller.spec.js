(function() {
  'use strict';

  describe('controllers', function(){
    var vm;
    var $timeout;
    var toastr;

    beforeEach(module('aDevKitBowerScss'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
      $timeout = _$timeout_;
    }));

    it('should have a timestamp creation date', function() {
      expect(vm.creationDate).toEqual(jasmine.any(Number));
    });
  });
})();
