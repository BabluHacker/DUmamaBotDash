<?php
/**
 * Created by PhpStorm.
 * User: mehedi
 * Date: 5/14/17
 * Time: 1:45 AM
 */


DEFINE ('DB_USER', 'sql12174464');
DEFINE ('DB_PASSWORD', 'RpsD87teFJ');
DEFINE ('DB_HOST', 'sql12.freemysqlhosting.net');
DEFINE ('DB_NAME', 'sql12174464');


/*
DEFINE ('DB_USER', 'root');
DEFINE ('DB_PASSWORD', '');
DEFINE ('DB_HOST', 'localhost');
DEFINE ('DB_NAME', 'stoppage');
*/
$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)
OR die('Could not connect to MySQL: ' .
    mysqli_connect_error());


?>
