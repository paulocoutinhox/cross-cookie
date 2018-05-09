var baseUrl = 'http://cross-cookie-backend.local';
var mySessionId = '';

function httpPost(url, data, onSuccess) {
    $.ajax({
        url: url,
        type: 'POST',
        crossDomain: true,
        xhrFields: { withCredentials: true },
        credentials: 'include',
        headers: {
            'My-Session-Id': mySessionId
        },
        success: function (data) {
            console.log('+ Request Success:');
            console.log(data);

            if (onSuccess) {
                onSuccess(data);
            }
        },
        error: function (ex) {
            console.log('+ Request Error:');
            console.log(ex);
        }
    });
}

function sendAjax1() {
    httpPost(baseUrl + '/ajax1.php');
}

function sendAjax2() {
    httpPost(baseUrl + '/ajax2.php');
}

function sendPostToIframe() {
    var form = $('#iframe_form');
    form.attr('action', baseUrl + '/ajax2.php');
    form.submit();
    console.log('Iframe form submited');
}

function sendGetSession() {
    httpPost(baseUrl + '/get-session-id.php', null, function(data) {
        $('#session_id').val(data);
    });    
}

function sendGetDataBySessionId() {
    httpPost(baseUrl + '/ajax3.php');
}