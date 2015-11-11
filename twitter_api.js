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
function TwitterAPI_Object_Creator(search)
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
        search_term: search
    };


    /**
     * api_success
     * Enter the stuff you want to do when the API returns a successful response.
     * @param result - The object that is returned from the response (typically a JSON object)
     */
    this.api_success = function(response)
    {       // retrieve the data for twitter, search string and callback function
        //console.log(response);
        var response_data_object = response.tweets.statuses;

        //run dom creation equal to amount of tweets
        for(var i=0; i<response_data_object.length; i++) {
            this.addTweetToDom(response_data_object[i]);
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


   this.addTweetToDom = function(this_tweet)
   {
        var list_group = $('#twitter-feed>.list-group');

       var list_group_item = $("<li class='list-group-item'></li>");
       var tweet_item = $("<div class='tweet-item'></div>");

       var tweet_item_avatar = $("<div class='row tweet-item-avatar'></div>");
       var img_div = $('<div class="col-md-3"></div>');
       var tweet_item_avatar_image = $("<img src='' class='tweet-item-avatar-image'>");
       tweet_item_avatar_image.attr('src', this_tweet.user.profile_image_url);

       var username_div = $('<div class="col-md-6"></div>');

       var tweet_item_fullname = $('<p class="push-right"><strong class="tweet-item-fullname"></strong></p>');
       tweet_item_fullname.find('.tweet-item-fullname').text(this_tweet.user.name);

       var tweet_item_username = $('<p class="tweet-item-username push-right"></p>');
       tweet_item_username.text(this_tweet.user.screen_name);

       var timestamp_div = $('<div class="col-md-3"></div>');
       var tweet_item_timestamp = $('<span class="tweet-item-timestamp"></span>');
       var time_reformatted = this_tweet['created_at'].substring(0,11);
       tweet_item_timestamp.text(time_reformatted);

       var tweet_item_text_div = $('<div class="tweet-item-text"></div>');
       var tweet_item_text_p = $('<p class="tweet-item-text"></p>');
       tweet_item_text_p.text(this_tweet.text);

       //Start adding to the DOM
       $(img_div).append(tweet_item_avatar_image);
       $(username_div).append(tweet_item_fullname, tweet_item_username);
       $(timestamp_div).append(tweet_item_timestamp);
       $(tweet_item_avatar).append(img_div, username_div, timestamp_div);
       $(tweet_item_text_div).append(tweet_item_text_p);
       $(tweet_item).append(tweet_item_avatar, tweet_item_text_div);
       $(list_group_item).append(tweet_item);
       list_group.append(list_group_item);
   };
}

function searchTwitterDefault()
{
    $('#twitter-feed>.list-group').html('');
    makeAjaxPostJsonCall(new TwitterAPI_Object_Creator('music'));
    makeAjaxPostJsonCall(new TwitterAPI_Object_Creator('sports'));
    makeAjaxPostJsonCall(new TwitterAPI_Object_Creator('comedy'));
    makeAjaxPostJsonCall(new TwitterAPI_Object_Creator('news'));
    makeAjaxPostJsonCall(new TwitterAPI_Object_Creator('animals'));
}

function searchTwitter(categories)
{
    $('#twitter-feed>.list-group').html('');

    for (var i = 0; i < categories.length; i++)
    {
        makeAjaxPostJsonCall(new TwitterAPI_Object_Creator(categories[i]));
    }
}