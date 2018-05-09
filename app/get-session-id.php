<?php
session_start();

$data = [
    'session_id' => session_id(),
    'session' => $_SESSION
];

echo(json_encode($data));