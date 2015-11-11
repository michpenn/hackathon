$(document).ready(function()
{
    $('#channel-list').on('click', '.youtube-item', function()
    {
        youtubeItemClickHandler($(this));
    });

    makeAjaxPostJsonCall(new YouTubeAPI_Search('music'));
    makeAjaxPostJsonCall(new YouTubeAPI_Search('sports'));
    makeAjaxPostJsonCall(new YouTubeAPI_Search('comedy'));
    makeAjaxPostJsonCall(new YouTubeAPI_Search('news'));
    makeAjaxPostJsonCall(new YouTubeAPI_Search('animals'));


    makeAjaxPostJsonCall(new TwitterAPI_Object_Creator('music'));
    makeAjaxPostJsonCall(new TwitterAPI_Object_Creator('sports'));
    makeAjaxPostJsonCall(new TwitterAPI_Object_Creator('comedy'));
    makeAjaxPostJsonCall(new TwitterAPI_Object_Creator('news'));
    makeAjaxPostJsonCall(new TwitterAPI_Object_Creator('animals'));
});