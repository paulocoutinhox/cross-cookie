<?php
session_set_cookie_params(3600, '/', '.cross-cookie-backend.local');
session_start();

$_SESSION['data'] = 'bugbuster3';

echo("AJAX1\n\n");
echo("Session\n\n");
var_dump($_SESSION);