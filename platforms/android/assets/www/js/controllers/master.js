
(function() {
	'use strict';

	// initialize module
	// TODO this code should be somewhere else
	angular.module('twitter', []);
	angular.module('youTube', []);

	angular.module('twitter').controller('TwitterController', function($scope, TwitterService) {
		// twitter
		$scope.twitter = {
			username: secrets.twitter.username
		};
		TwitterService.getLatestStatus(function(status){
			$scope.twitter.status = status[0].text;
			$scope.$apply();
		});
	});

	angular.module('youTube').controller('YouTubeController', function($scope, YouTubeService){
		// youTube
		$scope.youTube = {
			username: secrets.youTube.username
		};
		YouTubeService.getLatestVideo(function onVideo(error, video){
			if (error){
				// TODO visual feedback
				console.error(error);
			} else {
				$scope.youTube.video = video;
				//$scope.$apply();
			}
		});
	});
})();