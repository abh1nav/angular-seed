window.stream = {

	"max_id": undefined,
	
	"more":	function getNewTweets(callback)	{
				var url = "https://search.twitter.com/search.json?q=javascript&result_type=mixed";
				if(stream.max_id == undefined)	{
					url += "?";
				}
				else	{
					url += "&since_id=" + stream.next;
				}
				
				$.getJSON(url,
					function(data)	{
						stream.max_id = data['max_id_str'];
						callback(data['results']);
					});
			},

	"callback":	function streamCallback(data)	{
					console.log(data);
				}
}

