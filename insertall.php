

<?php
require_once ("stoppageDB.php");

$result = mysqli_query($dbc, "SELECT * FROM stoppages WHERE 1");


//NAMESS, ADDRESS, lat, lng, BUS
$a = array();

while($result && $extract = mysqli_fetch_array($result)){
    $bus = $extract["BUS"];
    $stoppage = $extract["NAMESS"];
    $lat = $extract["lat"];
    $lng = $extract["lng"];
    $address = $extract["ADDRESS"];

    array_push( $a, $extract);

}
//$data = array([1,2], [1,3]);
//echo json_encode($data);

echo json_encode($a);
?>
