/**
*  Twitter Api Code
*   Written by Ryan
    Written by Vick ... Kind of. 
*/

/**
*  @constructor for twitter api object 
*
*
*/
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
    this.api_data = {
        search_term: "NBA",
    };


    /**
     * api_success
     * Enter the stuff you want to do when the API returns a successful response.
     * @param result - The object that is returned from the response (typically a JSON object)
     */
    this.api_success = function(response)
    {       // retrieve the data for twitter, search string and callback function
        $('#twitter-feed>.list-group').html('');
        //console.log(response);
        var response_data_object = response.tweets.statuses;
        //run dom creation equal to amount of tweets
        for(var i=0; i<response_data_object.length; i++) {
            this.init_tweet_dom_creation();
        }
        // Gather arrays of DOM Elements
        var imgs = $('.list-group img');
        var fullnames = $('.tweet-item-fullname');
        var usernames = $('.tweet-item-username');
        var timestamps = $('.tweet-item-timestamp');
        var messages = $('p.tweet-item-text');

        //Loop through DOM Elements to add data from object
        for(var i=0; i<response_data_object.length; i++) {
            var time_reformatted = response_data_object[i];
            time_reformatted = time_reformatted['created_at'].substring(0,11);
            $(imgs[i]).attr('src', response_data_object[i].user.profile_image_url);
            $(fullnames[i]).text(response_data_object[i].user.name);
            $(usernames[i]).text(response_data_object[i].user.screen_name);
            $(timestamps[i]).text(time_reformatted);
            $(messages[i]).html("<a href='#'>"+response_data_object[i].text+"</a>");
        }
    };
    /**
     * api_error
     * Enter the stuff you want to do when the API returns a failed response.
     * @param result - The object that is returned from the response (typically a JSON object)
     */
    this.api_error = function(result)
    {
            
    };

    this.init_tweet_dom_creation = function() {
        var list_group_item = $("<li class='list-group-item'></li>");
        var tweet_item = $("<div class='tweet-item'></div>");
        var tweet_item_avatar = $("<div class='row tweet-item-avatar'></div>");
        var img_div = $('<div class="col-md-3"></div>');
        var tweet_item_avatar_image = $("<img src='' class='tweet-item-avatar-image'>");
        var username_div = $('<div class="col-md-6"></div>');
        var tweet_item_fullname = $('<p class="push-right"><strong class="tweet-item-fullname"></strong></p>');
        var tweet_item_username = $('<p class="tweet-item-username push-right"></p>');
        var timestamp_div = $('<div class="col-md-3"></div>');
        var tweet_item_timestamp = $('<span class="tweet-item-timestamp"></span>');
        var tweet_item_text_div = $('<div class="tweet-item-text"></div>');
        var tweet_item_text_p = $('<p class="tweet-item-text"></p>');
        //Start adding to the DOM
        $(img_div).append(tweet_item_avatar_image);
        $(username_div).append(tweet_item_fullname, tweet_item_username);
        $(timestamp_div).append(tweet_item_timestamp);
        $(tweet_item_avatar).append(img_div, username_div, timestamp_div);
        $(tweet_item_text_div).append(tweet_item_text_p);
        $(tweet_item).append(tweet_item_avatar, tweet_item_text_div);
        $(list_group_item).append(tweet_item);
        $('.list-group').append(list_group_item);
    }
}

