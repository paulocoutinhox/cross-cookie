var baseUrl = 'http://cross-domain.local';
var mySessionId = '';

if (document.location.hostname == 'crosscookie.prsolucoes.com') {
    baseUrl = 'http://api.crosscookie.prsolucoes.com';
}

function httpPost(url, data, onSuccess) {
    showResult('Loading...');

    var headers = {};

    if (mySessionId != '') {
        headers['My-Session-Id'] = mySessionId;
    }

    $.ajax({
        url: url,
        type: 'POST',
        crossDomain: true,
        xhrFields: { withCredentials: true },
        dataType: 'json',
        credentials: 'include',
        headers: headers,
        success: function (data) {
            console.log('+ Request Success:');
            console.log(data);

            showResult("Request Success: \n" + JSON.stringify(data));

            if (onSuccess) {
                onSuccess(data);
            }
        },
        error: function (ex) {
            console.log('+ Request Error:');
            console.log(ex);
            showResult('Request Error');
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

function sendPostToLocalIframe() {
    var form = $('#iframe_form');
    form.attr('action', baseUrl + '/ajax2.php');
    form.submit();
    console.log('Iframe form submited');
}

function sendPostToNewIframe() {
    var iframe = $('#iframe_new');

    if (iframe) {
        iframe.remove();
    }

    $('<iframe />', { id: 'iframe_new', src: baseUrl + '/ajax1.php' }).appendTo('body');
    iframe = $('#iframe_new').get(0);

    iframe.postMessage({ username: 'user1' }, baseUrl + '/ajax2.php');
    console.log('Iframe created and message was sent');
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

function showResult(data) {
    $('#input_result').text(data);
}