<?php
// pattern: 'HTTP_' + [your header upper case]
$session_id = (empty($_SERVER['HTTP_MY_SESSION_ID']) ? '' : $_SERVER['HTTP_MY_SESSION_ID']);

session_id($session_id);
session_start();

echo("GET SESSION DATA BY ID\n\n");
echo('Session ID: ' . $session_id . "\n\n");
echo("Session\n\n");
var_dump($_SESSION);