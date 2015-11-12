/**
 *
 * @param api_object
 * EXAMPLE:
 */
function makeAjaxPostJsonCall(api_object)
{
    if (api_object == null)
    {
        alert('You are passing a null API object!!!');
        return;
    }

    $.ajax(
        {
            method: 'POST',
            dataType: 'json',
            url: api_object.api_url,
            data: api_object.api_data,
            success: function(result)
            {
                api_object.api_success(result);
            },
            error: function(result)
            {
                api_object.api_error(result);
            }
        });
}

function makeAjaxGetJsonCall(api_object)
{
    if (api_object == null)
    {
        alert('You are passing a null API object!!!');
        return;
    }

    $.ajax(
        {
            method: 'GET',
            dataType: 'json',
            url: api_object.api_url,
            success: function(result)
            {
                api_object.api_success(result);
            },
            error: function(result)
            {
                api_object.api_error(result);
            }
        });
}