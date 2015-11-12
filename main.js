$(document).ready(function()
{
    $('#channel-list').on('click', '.youtube-item', function()
    {
        youtubeItemClickHandler($(this));
    });

    searchYoutubeDefault();
    searchTwitterDefault();
});