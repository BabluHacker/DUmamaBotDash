
<?php
//DB  insertion
require_once ("stoppageDB.php");


$name = $_POST["name"];
$busname = $_POST["busname"];
$lat = $_POST["lat"];
$lng = $_POST["lng"];
$address = $_POST["address"];



if($_POST["buttonadd"] == "Add") {

    $result = mysqli_query($dbc, "INSERT INTO stoppages(NAMESS, ADDRESS, lat, lng, BUS) VALUES ('$name','$address','$lat','$lng','$busname')") or die(mysqli_error($dbc));;
    if ($result) {
        echo "<script>alert('Stoppage added successfully'); window.location = '/';</script>";
    } else {
        echo "<script>alert('Unsuccessfull'); window.location = '/'</script>";
    }
}
else if($_POST["buttonadd"] == "Delete"){
    $result = mysqli_query($dbc, "DELETE FROM stoppages WHERE NAMESS = '$name' AND ADDRESS = '$address' AND lat = '$lat' AND lng = '$lng' AND BUS = '$busname'");
    if ($result) {
        echo "<script>alert('Stoppage Deleted successfully'); window.location = '/';</script>";
    } else {
        echo "<script>alert('Unsuccessfull Deletion'); window.location = '/'</script>";
    }
}

?>