<?php
session_start();

echo("AJAX2\n\n");
echo('Data: ' . (empty($_SESSION['data']) ? 'EMPTY' : $_SESSION['data']) . "\n\n");
echo("Session\n\n");
var_dump($_SESSION);