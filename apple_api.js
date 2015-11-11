/**
*   Apple API Javascsript
*   Written by Ryan
*   
*/

/*
**   @constructor for Apple API Object
*
*/

function AppleAPI_Object_Creator() {
/** 
*  Enter the URL for this API 
*  @type - string URL
*/
	this.api_url = '';
   /** 
   * Enter the data object properties below.
   * These are the key/value parameters you pass like in Postman.
   * @type - object
   */
	this.api_data = {

	};

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



}

/**
 * AppleAPI_GetTopMovies
 * @constructor - gets the top 10 movies
 */
function AppleAPI_GetTopMovies()
{
    /**
     * Enter the URL for this API
     * @type - string URL
     */
    this.api_url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
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
        this.listMoviesSideBySide(result);
        this.listMoviesWithDirector(result);
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
    this.listMoviesWithDirector = function(result)
    {
        console.log('AJAX Success function called, with the following result:', result);

        // Feature Set #2
        var movie_info = result.feed.entry[0];

        // Feature Set #3
        var movie_entries = result.feed.entry;
        for (var i = 0; i < movie_entries.length; i++)
        {
            var new_image = $('<img>').attr('src', movie_entries[i]["im:image"][2]['label']);

            // Feature Set #4
            var name = $('<p>').text(movie_entries[i]["im:name"]["label"]);
            var director = $('<p>').text('Directed by: ' + movie_entries[i]["im:artist"]["label"]);
            var movie_span = $('<div>').append(new_image, name, director, $('<hr>'));

            $('#main').append(movie_span);
        }
    };

    this.listMoviesSideBySide = function(result)
    {
        console.log('AJAX Success function called, with the following result:', result);

        // Feature Set #2
        var movie_info = result.feed.entry[0];

        // Feature Set #3
        var movie_entries = result.feed.entry;
        for (var i = 0; i < movie_entries.length; i++)
        {
            var new_image = $('<img>').attr('src', movie_entries[i]["im:image"][2]['label']);

            var movie_span = $('<span>').append(new_image);

            $('#main').append(movie_span);
        }
    };
}