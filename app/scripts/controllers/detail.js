'use strict';

angular.module('archiveApp')
  .controller('DetailController', ['$scope', 'Archive', '$stateParams',
    function ($scope, Archive, $stateParams) {
      Archive.getShow($stateParams.id).then(function(data) {
        console.log(data);
        $scope.data = data;
        $scope.metadata = data.metadata;
        $scope.item = data.item;
        $scope.reviews = data.reviews;
        var files = data.files;
        $scope.misc = data.misc;
        $scope.filePath = 'http://archive.org/download/' + data.metadata.identifier[0] + '/' + data.metadata.identifier[0] + '_vbr_mp3.zip';
      
      var sorted = _.groupBy(files, function(item) {
        return item.format;
      });

      console.log(Object.keys(sorted));

    });
} ]);
