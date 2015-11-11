/**
*  Flicker API Javascript
*  Written by Ryan
   Written by Vick ... kind of.
*/
  
 /* 
 *@constructor - You are basically creating a object
 *
 *   Example to create an object with these properties, type:
 *   var my_flickr_api_skeleton = new FlickrAPI_Skeleton();
  */

 function FlickrAPI_Object_Creator() {
 	/**
     * Enter the URL for this API
     * @type - string URL
     */
    this.api_url = 'http://s-apis.learningfuze.com/hackathon/flickr/search.php';
	/**
     * Enter the data object properties below.
     * These are the key/value parameters you pass like in Postman.
     * @type - object
     */
    this.api_data = {
    	query: '',
    	maxResults: null
    };
	/**
     * api_success
     * Enter the stuff you want to do when the API returns a successful response.
     * @param result - The object that is returned from the response (typically a JSON object)
     */
    this.api_success = function(result) {
	}
	/**
     * api_error
     * Enter the stuff you want to do when the API returns a failed response.
     * @param result - The object that is returned from the response (typically a JSON object)
     */
    this.api_error = function(result)
    {

    };

}

 // Testing on Dom Load
 // Note: might still be necessary to tie this to events based of modal
 $(function() {
 		var new_Flickr_obj = new FlickrAPI_Object_Creator();
 		new_Flickr_obj.api_data.query = 'basketball'; //need to bind query to form value from modal
 		new_Flickr_obj.api_data.maxResults = '25';  //need to bind maxResults to form value from modal
 		// On success, run getData method passing in query and maxResults properties, and callback function 
 		new_Flickr_obj.api_success = apis.flickr.getData(new_Flickr_obj.api_data.query, new_Flickr_obj.api_data.maxResults, 
 			function(success, response) {
 				if (success) {
 					var response_data_object = response,
 						len = response_data_object.urls.length;
 				//start looping through urls and build image elements with figure/captions	
				for (var i = 0; i < len; i++) {
						var url = response_data_object.urls[i],
                     	 description = response_data_object.photos.photo[i].title;
                     	 img = $("<img>").attr("src", url).attr("width", "150").attr("height", "150"),
                         fig = $("<figure>"),
                         figcap = $("<figcaption>").html(description),
						 content = fig.append(img).append(figcap);
					//code just to get images in this div section, Michal is still working with carousel html	 
                    $("#flickr-carousel").append(content);
                }
 			  }
 			}

 		);
 });