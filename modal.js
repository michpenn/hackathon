/**
 * Created by michpenn on 11/10/15.
 */
var iTunes = false;
var youTube = false;
var vine = false;
var flickr = false;
var twitter = false;


function saveMediaPreferences() {
if ($(":checkbox[name='media_choices']").is(":checked")) {
    if($(":checkbox[id='iTunes']").is(":checked")) {
        iTunes = true;
        console.log('iTunes call will be made');
    }
    if($(":checkbox[id='videos']").is(":checked")) {
        youTube = true;
        console.log('Youtube call will be made');
        vine= true;
        console.log('Vine call will be made');
    }
    if($(":checkbox[id='pictures']").is(":checked")) {
        flickr = true;
        console.log('Flickr call will be made');
    }
    if($(":checkbox[id='twitter']").is(":checked")) {
        twitter = true;
        console.log('Twitter call will be made');
    }
    generatePreferences();
}
    else {
    alert('please select a choice before continuing');
}
    }

function generatePreferences() {
    $('.modal-body').html('');
    var preferences_header = $('<h4>', {
        text:'Select up to 5 preferences',
    });
    $('.modal-body').append(preferences_header);
}
