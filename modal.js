/**
 * Created by michpenn on 11/10/15.
 */
var iTunes = false;
var youTube = false;
var vine = false;
var flickr = false;
var twitter = false;
var channel_options_array = ['Music', 'Sports', 'News', 'Comedy', 'Animals', 'Dance', 'Food', 'DIY', 'Places', 'Trending', 'Virtual Reality'];
var selected_preferences = [];


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
        text:'Select up to 5 preferences'
    });
    var preferences_list = $('<div>', {
        class: 'preferences_list'
    });

    for(var i=0; i<=channel_options_array.length; i++) {
        var new_option = $('<div>', {
            class: 'col-sm-4 option',
            name: channel_options_array[i],
            text: channel_options_array[i],
        });
        new_option.on('click', function(){
            registerClick(this);
        });
    $(preferences_list).append(new_option);
    }
    $('.modal-body').append(preferences_header, preferences_list);
}


function registerClick(clicked) {
    console.log('it works');
    var justClicked = clicked;
    $(justClicked).toggleClass('clicked');
    console.log(selected_preferences);
    console.log(justClicked);
    console.log($(clicked).text());
selected_preferences.push($(clicked).text());
    console.log(selected_preferences);
    for (var i=0; i<selected_preferences.length; i++) {
        console.log(selected_preferences[i]);

        }

    /*selected_preferences.push($(clicked).text());
    console.log(selected_preferences); */
}