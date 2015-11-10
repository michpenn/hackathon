/**
 * Created by michpenn on 11/10/15.
 */
var iTunes = false;
var youTube = false;
var vine = false;
var flickr = false;
var twitter = false;


function savePreferences() {
if ($(":checkbox[name='media_choices']").is(":checked")) {
    if($(":checkbox[id='iTunes']").is(":checked")) {
        iTunes = true;
    }
    if($(":checkbox[id='videos']").is(":checked")) {
        youTube = true;
        vine= true;
    }
    if($(":checkbox[id='pictures']").is(":checked")) {
        flickr = true;
    }
    if($(":checkbox[id='twitter']").is(":checked")) {
        twitter = true;
    }
}
    else {
    alert('please select a choice before continuing');
}
    console.log('iTunes call will be made: ' +  iTunes, ' Youtube call will be made: ' + youTube, ' Vine call will be made: ' + vine, ' Flickr call will be made: ' + flickr, ' Twitter call will be made: ' + twitter);
}
