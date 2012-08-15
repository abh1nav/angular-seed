'use strict';

/* Controllers */


function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];


function TweetController($scope)	{
	$scope.tweets =  [];
	
	$scope.tweet_ids = [];
	
	var refresh = function()	{
		stream.more(function(data)	{
		for(var i = 0; i < data.length; i++)	{
			if($scope.tweet_ids.indexOf(data[i]['id_str']) == -1)	{
				$scope.tweets.unshift(data[i]);
				$scope.tweet_ids.push(data[i]['id_str']);
			}
		}
		
		$scope.$digest();
		
		setTimeout(refresh, 5000);
		});
	}
	
	setTimeout(refresh, 2000);
}