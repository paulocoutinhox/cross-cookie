var baseUrl = 'http://cross-domain.local';
var mySessionId = '';

function httpPost(url, data, onSuccess) {
    $.ajax({
        url: url,
        type: 'POST',
        crossDomain: true,
        xhrFields: { withCredentials: true },
        dataType: 'json',
        credentials: 'include',
        headers: {
            'My-Session-Id': mySessionId,
            'Content-Type': 'application/json'
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
    httpPost(baseUrl + '/ajax1.php', null, function (data) {
        setNewSessionId(data.session_id);
    });
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

function sendGetSessionId() {
    httpPost(baseUrl + '/get-session-id.php', null, function (data) {
        setNewSessionId(data.session_id);
    });
}

function sendGetDataBySessionId() {
    httpPost(baseUrl + '/ajax3.php');
}

function applySessionId() {
    setNewSessionId($('#session_id').val());
    console.log('Applied!');
}

function setNewSessionId(newId) {
    $('#session_id').val(newId);
    mySessionId = newId;
}