/**
 * YouTube API global variables
 */
var YOUTUBE_KEY = '';
var YOUTUBE_SECRET = '';



/**
 * COPY AND PASTE this skeleton function when you make a new YouTube API
 * DO NOT fill in the blanks for this skeleton
 *
 * @constructor - You are basically creating a object
 *
 *   Example to create an object with these properties, type:
 *   var my_youtube_api_skeleton = new YouTubeAPI_Skeleton();
 */
function YouTubeAPI_Skeleton()
{
    /**
     * Enter the URL for this API
     * @type - string URL
     */
    this.api_url = '';



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
    {

    };


    /**
     * api_error
     * Enter the stuff you want to do when the API returns a failed response.
     * @param result - The object that is returned from the response (typically a JSON object)
     */
    this.api_error = function(result)
    {

    };


    /**
     * Add your own helper functions below.
     */
}

/**
 * COPY AND PASTE this skeleton function when you make a new YouTube API
 * DO NOT fill in the blanks for this skeleton
 *
 * @constructor - You are basically creating a object
 *
 *   Example to create an object with these properties, type:
 *   var my_youtube_api_skeleton = new YouTubeAPI_Skeleton();
 */
function YouTubeAPI_Skeleton()
{
    /**
     * Enter the URL for this API
     * @type - string URL
     */
    this.api_url = '';



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
    {

    };


    /**
     * api_error
     * Enter the stuff you want to do when the API returns a failed response.
     * @param result - The object that is returned from the response (typically a JSON object)
     */
    this.api_error = function(result)
    {

    };


    /**
     * Add your own helper functions below.
     */
}


function YouTubeAPI_Search()
{
    /**
     * Enter the URL for this API
     * @type - string URL
     */
    this.api_url = 'http://s-apis.learningfuze.com/hackathon/youtube/search.php';



    /**
     * Enter the data object properties below.
     * These are the key/value parameters you pass like in Postman.
     * @type - object
     */
    this.api_data =
    {
        q: 'puppies',
        maxResults: 10
    };


    /**
     * api_success
     * Enter the stuff you want to do when the API returns a successful response.
     * @param result - The object that is returned from the response (typically a JSON object)
     */
    this.api_success = function(result)
    {
        if (result.success == true)
        {
            $('#youtube-main').html('');
            var list_group = $('<ul>');
            list_group.addClass('list-group');
            for (var i = 0; i < result.video.length; i++)
            {
                var title = result.video[i].title;
                var vid_id = result.video[i].id;
                list_group.append(this.createDomElement(title, vid_id, null, null));
            }
            $('#youtube-main').append(list_group);
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


    /**
     * Add your own helper functions below.
     */
    this.createDomElement = function(title, id, thumbnail_url, author)
    {
        var list_group_item = $('<li>').addClass('list-group-item');
        var youtube_item = $('<div>').addClass('youtube-item');
        youtube_item.attr('video-id', id);

        var thumbnail_div = $('<div>').addClass('youtube-thumbnail');
        var src = (thumbnail_url == null ? 'images/logo_youtube.png' : thumbnail_url);
        var thumbnail_img = $('<img>').attr('src', src);
        thumbnail_div.append(thumbnail_img);

        var info_div = $('<div>').addClass('youtube-info');
        var headline = $('<p>').addClass('youtube-headline');
        headline.append($('<strong>').text(title));
        info_div.append(headline);

        youtube_item.append(thumbnail_div, info_div);
        list_group_item.append(youtube_item);
        return list_group_item;
    };
}