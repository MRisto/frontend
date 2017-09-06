(function () {
    'use strict';

    angular
        .module('courses')
        .controller('InfoModalCtrl', InfoModalCtrl);

    InfoModalCtrl.$inject = ['$scope', '$state', '$uibModalInstance', 'Courses', 'I18nManager', 'data'];

    function InfoModalCtrl($scope, $state, $uibModalInstance, Courses, I18nManager, data) {
        var vm = this;
        vm.data = data;
        vm.cancel = function () {
            $uibModalInstance.dismiss("");
        };
    }
}());