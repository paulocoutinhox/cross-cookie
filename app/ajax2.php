<?php
session_start();

$crossData = (empty($_SESSION['cross-data']) ? 'EMPTY' : $_SESSION['cross-data']);

$data = [
    'cross-data' => $crossData,
    'session' => $_SESSION
];

echo(json_encode($data));