const start_btn = document.getElementById('start_btn');
const end_btn = document.getElementById('end_btn');
const maphere = document.getElementById('maphere');
 
let flag=0;

const getInfo = async(event)=>{
   event.preventDefault();
    flag=1;
    // alert('hi');
    x = navigator.geolocation;

    x.getCurrentPosition(success, failure);

    function success(position)

    {
        var myLat = position.coords.latitude;
        var myLong = position.coords.longitude;

        //alert(myLat);

        var coords = new google.maps.LatLng(myLat,myLong);

        var mapOptions = {

            zoom:11,
            center: coords,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(document.getElementById("maphere"), mapOptions);
        var marker = new google.maps.Marker({map:map, position:coords});	
    }

    function failure(){ }
}

const setInfo = async(event)=>{
    event.preventDefault();
    try{
        if(flag==0)
        {
            alert('you should start before end!')
        }
    }catch(error)
    {
        console.log(error)
    }
}



start_btn.addEventListener('click',getInfo);
end_btn.addEventListener('click',setInfo);