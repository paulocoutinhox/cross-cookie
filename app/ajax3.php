<?php
// pattern: 'HTTP_' + [your header name upper case]
$sessionId = (empty($_SERVER['HTTP_MY_SESSION_ID']) ? '' : $_SERVER['HTTP_MY_SESSION_ID']);

session_id($sessionId);
session_start();

$crossData = (empty($_SESSION['cross-data']) ? 'EMPTY' : $_SESSION['cross-data']);

$data = [
    'cross-data' => $crossData,
    'session_id' => $sessionId,
    'session' => $_SESSION
];

echo(json_encode($data));