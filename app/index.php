<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Cross Cookie Test</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css">
  <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
  <script src="main.js"></script>
</head>

<body>
  <section class="section">
    <div class="container" style="text-align: center;">
      <h1 class="title">Cross cookie test</h1>

      <br />
      <br />

      <button class="button is-rounded is-primary" onclick="sendAjax1()">Ajax 1</button>

      <br />
      <br />

      <button class="button is-rounded is-primary" onclick="sendAjax2()">Ajax 2</button>

      <br />
      <br />

      <button class="button is-rounded is-primary" onclick="sendPostToIframe()">Post to Iframe</button>

      <br />
      <br />

      <form id="iframe_form" target="iframe_post"></form>

      <iframe id="iframe_post" name="iframe_post" style="width: 100%; height: 300px; margin: 0 auto; border:1px solid #CCC;"></iframe>

      <br />
      <br />

      <button class="button is-rounded is-primary" onclick="sendGetSessionId()">Get session ID</button>

      <br />
      <br />

      <button class="button is-rounded is-primary" onclick="sendGetDataBySessionId()">Get data by session ID</button>

      <br />
      <br />

      <div class="field has-addons" style="text-align: center; width: 310px; margin: 0 auto;">
        <div class="control">
          <input class="input" type="text" id="session_id" placeholder="Type the session ID" style="width: 240px">
        </div>
        <div class="control">
          <a class="button is-primary" href="javascript: applySessionId(); void(0);" style="width: 70px">
            Apply
          </a>
        </div>
      </div>

      <br />
      <br />

      <textarea class="input" id="input_result" style="width: 100%; height: 300px; margin: 0 auto; border:1px solid #CCC;">Result will be here</textarea>

      <br />
      <br />

    </div>
  </section>
</body>

</html>