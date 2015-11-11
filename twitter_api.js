/**
*  Twitter Api Code
*
*/

/**
*  @constructor for twitter api object 
*
*
*/
//var global_result;
function TwitterAPI_Object_Creator()
{
    /**
     * Enter the URL for this API
     * @type - string URL
     */
    this.api_url = 'http://s-apis.learningfuze.com/hackathon/twitter/index.php';
	/**
     * Enter the data object properties below.
     * These are the key/value parameters you pass like in Postman.
     * @type - object
     */
    this.api_data = {};


    /**
     * api_success
     * Enter the stuff you want to do when the API returns a successful response.
     * @param result - The object that is returned from the response (typically a JSON object)
     */
    this.api_success = function(result)
    {       // retrieve the data for twitter, search string and callback function 
           

    };


    /**
     * api_error
     * Enter the stuff you want to do when the API returns a failed response.
     * @param result - The object that is returned from the response (typically a JSON object)
     */
    this.api_error = function(result)
    {
            
    };
}


function init_tweet_dom_creation() {

		var list_group_item = $("<li class='list-group-item'></li>");
		var	tweet_item = $("<div class='tweet-item'></div>");
		var	tweet_item_avatar = $("<div class='row tweet-item-avatar'></div>");
		var	img_div = $('<div class="col-md-3"></div>');
		var	tweet_item_avatar_image = $("<img src='' class='tweet-item-avatar-image'>");
		var	username_div = $('<div class="col-md-6"></div>');
		var	tweet_item_fullname = $('<p class="push-right"><strong class="tweet-item-fullname"></strong></p>');
		var	tweet_item_username = $('<p class="tweet-item-username push-right"></p>');
		var	timestamp_div = $('<div class="col-md-3"></div>');
		var	tweet_item_timestamp = $('<span class="tweet-item-timestamp"></span>');
		var	tweet_item_text_div = $('<div class="tweet-item-text"></div>');
		var	tweet_item_text_p = $('<p class="tweet-item-text"></p>');
			$(img_div).append(tweet_item_avatar_image);
			$(username_div).append(tweet_item_fullname, tweet_item_username);
			$(timestamp_div).append(tweet_item_timestamp);
			$(tweet_item_avatar).append(img_div, username_div, timestamp_div);
			$(tweet_item_text_div).append(tweet_item_text_p);
			$(tweet_item).append(tweet_item_avatar, tweet_item_text_div);
			$(list_group_item).append(tweet_item);
			$('.list-group').append(list_group_item);


}


    /*
	** Event Listener, then event handler will create new twitter api object
    */

    // Test on document load
	$(function() {
    	
    	var newTwitterObject = new TwitterAPI_Object_Creator();
    	//Set success property to retrieve tweets based on search term passed in
    	newTwitterObject.api_success = apis.twitter.getData("NBA", function(success, response){
    		console.log(response);
    		var global_result = response.tweets.statuses;
    		console.log(global_result[0].created_at);
    		console.log(typeof global_result);
    		for(var i=0; i<global_result.length; i++) {
    			init_tweet_dom_creation();
    			//console.log(global_result[i].user.profile_image_url);
    			//$('.list-group:first').find("img").attr("src", global_result[i].user.profile_image_url);
			}
			var imgs = $('.list-group img'),
				fullnames = $('.tweet-item-fullname'),
				usernames = $('.tweet-item-username'),
				timestamps = $('.tweet-item-timestamp'),
				messages = $('p.tweet-item-text');

				//console.log(imgs,fullnames,usernames,timestamps,messages);
			for(var i=0; i<imgs.length; i++) {
				var time_reformatted = global_result[i].created_at.slice(0,11);
				$(imgs[i]).attr('src', global_result[i].user.profile_image_url);
				$(fullnames[i]).text(global_result[i].user.name);
				$(usernames[i]).text(global_result[i].user.screen_name);
				$(timestamps[i]).text(time_reformatted);
				$(messages[i]).text(global_result[i].text);
			}

			
    		
    		
    	});
    	

    });