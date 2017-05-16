
<!DOCTYPE html>
<html>
<head>
    <title>PlaceID Geocoder</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <link href="css/style.css" rel="stylesheet">
    <script src="js/custom.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.7.1.min.js"></script>




</head>
<body>
<input id="pac-input" class="controls" type="text"
       placeholder="Enter a location">
<form id="formin" method="post" action="insert.php" accept-charset="utf-8">
    <input id="name" name="name" class="controls" type="text" placeholder="Stoppage Name" required>*
    <input id="busname" name="busname" class="controls" type="text" placeholder="Bus Name" required>*<br>
    <b>Latitude : </b>
    <input id = "lat" name="lat" class="controls" type="text" required>*
    <b >Longitude: </b>
    <input id = "lng" name="lng" class="controls" type="text"   required>*<br>
    <input id = "address" name="address" class="controls" type="text"   required>*

    <input id="buttonadd" name="buttonadd" class="controls" type="submit" value="Add">
    <input id="buttondelete" name="buttonadd" class="controls" type="submit" value="Delete">


</form>


<div id="map"></div>

<div id="infowindow-content">

    <span id="place-bus"  class="title"></span>
    <br>
    <span id="place-stoppage"></span><br>
    <span id="place-address"></span><br>
    <span id="place-latlng"></span><br>
</div>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCx8ufMekf0YzNANDxPVpwvS3cy72jOOmI&libraries=places&callback=initMap" async defer></script>



</body>
</html>
