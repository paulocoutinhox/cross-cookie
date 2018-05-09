<?php
session_set_cookie_params(3600, '/', '.cross-domain.local');
session_start();

$_SESSION['cross-data'] = date('Y-m-d-H-i-s');

$data = [
    'session_id' => session_id(),
    'session' => $_SESSION
];

echo(json_encode($data));