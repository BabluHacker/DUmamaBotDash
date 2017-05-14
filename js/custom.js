/**
 * Created by mehedi on 5/13/17.
 */


// This sample uses the Place Autocomplete widget requesting only a place
// ID to allow the user to search for and locate a place. The sample
// then reverse geocodes the place ID and displays an info window
// containing the place ID and other information about the place that the
// user has selected.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">


function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 23.7448469, lng: 90.4266587},
        zoom: 14
    });
    var i =0;
    var input = document.getElementById('pac-input');

    var autocomplete = new google.maps.places.Autocomplete(
        input, {placeIdOnly: true});
    autocomplete.bindTo('bounds', map);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);


    //markers




    var infowindow = new google.maps.InfoWindow();
    var infowindowContent = document.getElementById('infowindow-content');
    var inputbar = document.getElementById('formin');
    infowindow.setContent(infowindowContent);
    var geocoder = new google.maps.Geocoder;
    /*var marker = new google.maps.Marker({
        map: map
    });
    marker.addListener('click', function(event) {
        // clicking on marker open info window
        infowindow.open(map, marker);

    });
*/

    //insertOnFirstLoad("busbus", "khilkhil", 23.757430489128577, 90.41996955871582, "no address");


    $.ajax({
        url : '../insertall.php', // my php file
        type : 'GET', // type of the HTTP request
        success : function(result){
            var obj = jQuery.parseJSON(result);
            //console.log(obj);
            insertMarker(obj)

        }
    });


    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        var place = autocomplete.getPlace();

        if (!place.place_id) {
            return;
        }
        geocoder.geocode({'placeId': place.place_id}, function(results, status) {

            if (status !== 'OK') {
                window.alert('Geocoder failed due to: ' + status);
                return;
            }
            map.setZoom(14);
            map.setCenter(results[0].geometry.location);
            // Set the position of the marker using the place ID and location.
            /*marker.setPlace({
                placeId: place.place_id,
                location: results[0].geometry.location
            });*/
            //marker.setVisible(true);
            infowindowContent.children['place-name'].textContent = place.name;
            infowindowContent.children['place-id'].textContent = place.place_id;
            infowindowContent.children['place-address'].textContent = results[0].formatted_address;
            //infowindow.open(map, marker);
        });
    });

    google.maps.event.addListener(map, 'click', function( event ){
        var lat = event.latLng.lat();
        var lng = event.latLng.lng();


        geocodeLatLng(lat, lng);


        //placeMarker(lat, lng, i++)

        //alert( "Latitude: "+lat+" "+", longitude: "+lng +" Address: "+address );

    });

    //not in use
    function placeMarker(lat, lng, loc){
        var myLatLng = {lat: lat, lng: lng};

        var marker = new google.maps.Marker({

            position: myLatLng,
            map: map
        });

        marker.addListener('click', function(event) {
            // clicking on marker open info window
            infowindow.open(map, marker);
            infowindowContent.children['place-name'].textContent = loc;


        });


    }



    function geocodeLatLng(lat, lng) {
        var latlng = new google.maps.LatLng(lat, lng);



        geocoder.geocode({'location': latlng}, function(results, status) {
            if (status === 'OK') {
                if (results[1]) {
                    //map.setZoom(14);
                    var marker = new google.maps.Marker({
                        position: latlng,
                        map: map,
                        animation: google.maps.Animation.DROP,
                        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"

                    });



                    marker.addListener('click', function(event) {
                        // clicking on marker open info window
                        infowindow.open(map, marker);
                        infowindowContent.children['place-bus'].textContent = "NULL";
                        infowindowContent.children['place-stoppage'].textContent = "NULL";
                        infowindowContent.children['place-address'].textContent = results[1].formatted_address;
                        infowindowContent.children['place-latlng'].textContent = latlng;

                        inputbar.children['name'].value = "";
                        inputbar.children['busname'].value = "";
                        inputbar.children['lat'].value = lat;
                        inputbar.children['lng'].value = lng;
                        inputbar.children['address'].value = results[1].formatted_address;


                    });
                    infowindowContent.children['place-bus'].textContent = "NULL";
                    infowindowContent.children['place-stoppage'].textContent = "NULL";
                    infowindowContent.children['place-address'].textContent = results[1].formatted_address;
                    infowindowContent.children['place-latlng'].textContent = latlng;

                    inputbar.children['name'].value = "";
                    inputbar.children['busname'].value = "";
                    inputbar.children['lat'].value = lat;
                    inputbar.children['lng'].value = lng;
                    inputbar.children['address'].value = results[1].formatted_address;
                    infowindow.open(map, marker);
                } else {
                    window.alert('No results found');
                }
            } else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
    }


    function insertMarker(obj) {
        var bus, address, stoppage, lat, lng;

        for(var i = 0; i<obj.length; i++){
            bus = obj[i].BUS;
            address = obj[i].ADDRESS;
            stoppage = obj[i].NAMESS;
            lat = obj[i].lat;
            lng = obj[i].lng;

            //console.log(bus+address+stoppage+lat+lng);
            insertOnFirstLoad(bus, stoppage,lat, lng,address);
        }
    }

    function insertOnFirstLoad(bus, stoppage, lat, lng, address){




        var latlng = new google.maps.LatLng(lat, lng);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            animation: google.maps.Animation.DROP,

        });

        marker.addListener('click', function(event) {
            // clicking on marker open info window
            infowindow.open(map, marker);
            infowindowContent.children['place-bus'].textContent = bus;
            infowindowContent.children['place-stoppage'].textContent = stoppage;
            infowindowContent.children['place-address'].textContent = address;
            infowindowContent.children['place-latlng'].textContent = latlng;

            inputbar.children['name'].value = stoppage;
            inputbar.children['busname'].value = bus;
            inputbar.children['lat'].value = lat;
            inputbar.children['lng'].value = lng;
            inputbar.children['address'].value = address;


        });


    }


    ///////////

/////////////////// not in use
    /*
    function AjaxCaller(){
        var xmlhttp=false;
        try{
            xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        }catch(e){
            try{
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }catch(E){
                xmlhttp = false;
            }
        }

        if(!xmlhttp && typeof XMLHttpRequest!='undefined'){
            xmlhttp = new XMLHttpRequest();
        }
        return xmlhttp;
    }

    function callPage(url, div){
        ajax=AjaxCaller();
        ajax.open("GET", url, true);
        ajax.onreadystatechange=function(){
            if(ajax.readyState===4){
                if(ajax.status===200){
                    div.innerHTML = ajax.responseText;
                }
            }
        }
        ajax.send(null);
    }*/

}