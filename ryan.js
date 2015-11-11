$(document).ready(function()
{
    var youtube_api_search = new YouTubeAPI_Search();

    $('#channel-list').on('click', '.youtube-item', function()
    {
        youtubeItemClickHandler($(this));
    });

    makeAjaxPostJsonCall(youtube_api_search);
});