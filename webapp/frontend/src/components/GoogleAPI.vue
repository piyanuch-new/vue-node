<template>
  <section class="sc-google-api"> 
    <h1>Google API</h1>
    <div class="wrap-map">
      <div class="box-loading">
        <div class="box-center">
          <div class="loading">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div id="map" class="bx-map"></div>
      <div class="bx-detail"></div>
    </div>
  </section>
</template>

<script> 
  import gmapsInit from '@/assets/js/map';
  export default {
    async mounted() {
      try {
        const google = await gmapsInit();
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();    
        const geocoder = new google.maps.Geocoder();
        const latlng = new google.maps.LatLng(13.776871, 100.530253);
        const mapOptions = {
          zoom: 13,
          center: latlng
        }
        const map = new google.maps.Map(document.getElementById('map'), mapOptions);
        const locations = [
          {
            name: "Central World",
            position: {
              lat: 13.746597,
              lng: 100.539360
            }            
          },
          {
            name: "SCG",
            position: {
              lat: 13.805881,
              lng: 100.537532
            }            
          }
        ];
        directionsRenderer.setMap(map);
        var request = {
          origin: new google.maps.LatLng(13.746597,100.539360),
          destination: new google.maps.LatLng(13.805881,100.537532),
          travelMode: 'DRIVING',
          avoidTolls: true
        };
        directionsService.route(request, function(response, status) {
          if (status == 'OK') {
            directionsRenderer.setDirections(response)
            var route = response.routes[0];
            var summaryPanel = document.querySelector('.bx-detail');
            summaryPanel.innerHTML = '';
            // For each route, display summary information.
            for (var i = 0; i < route.legs.length; i++) {
              var routeSegment = i + 1;
              summaryPanel.innerHTML += '<div class="wrap-info">'+
              '<h2>Route Segment : '+ routeSegment +'</h2>'+
              '<p><b>From :</b> '+ route.legs[i].start_address +'</p>'+
              '<p><b>To :</b> '+ route.legs[i].end_address +'</p>'+
              '<p><b>Duration :</b> '+ route.legs[i].duration.text +'<b>Distance :</b> '+ route.legs[i].distance.text +'</p></div>'+
              '<div class="wrap-table"><table><tbody></tbody></table></div>'
              
              var summaryList = document.querySelector('.wrap-table tbody');
              summaryList.innerHTML = '';

              for (var l = 0; l < route.legs[i].steps.length; l++){
                console.log(route.legs[i].steps[l])
                var listSegment = l + 1;
                summaryList.innerHTML += '<tr>'+
                  '<td>'+ listSegment +'.</td>'+
                  '<td>'+ route.legs[i].steps[l].instructions +'</td>'+
                  '<td>'+ route.legs[i].steps[l].distance.text +'</td>'+
                '</tr>'
              }
              document.querySelector('.box-loading').className += " done"
            }
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      } catch (error) {
        console.error(error);
      }
    },
  }
</script>
<style lang="stylus">
  @keyframes ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
  .sc-google-api{
    text-align: center;
  }
  .wrap-map{
    position: relative; 
    overflow: hidden;
    height: 600px;    
    .bx-map{
      width: 60%; 
      height: 100%; 
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
    .bx-detail{
      width: 40%;
      height: 100%;
      text-align: left;
      position: absolute;
      top: 0;
      left: 60%;
      z-index: 1;
    }    
  }
  .wrap-info{
    padding: 15px 30px;
    height: 210px;
    h2{
      margin-bottom: 20px;
    }
    p{
      padding: 5px 0;
    }
  }
  .wrap-table{
    width: calc(100% - 10px);
    height: calc(100% - 230px);
    padding: 0 10px 0 25px;
    position: relative;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 5px;
      height: 8px;
      background-color: #ecf6e2;
    }
    &::-webkit-scrollbar-thumb {
      background: #86baa3; 
    }
    table{
      width: 100%;
    }
    td{
      padding: 10px;
      border-top: 1px solid #ecf6e2;
      vertical-align: top;
      &:first-child{
        text-align: center;
      }
      &:last-child{
        width: 70px;
        text-align: right;
      }
    }
  }
  .box-loading{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffe;
    z-index: 2;
    transition: 0.4s all ease-out 0.3s;
    &.done{
      opacity: 0;
      z-index: 1;
    }
    .loading{
      position: relative;
      display: block;
      width: 80px;
      height: 80px;
      span{
        position: absolute;
        border: 4px solid #86baa3;
        opacity: 1;
        border-radius: 50%;
        animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        &:nth-child(2) {
          animation-delay: -0.5s;
        }
      }
    }
  }
  @media screen and (max-width: 780px) {
    .wrap-map{
      height: auto;
      .bx-map{
        width: 100%; 
        height: 480px; 
        position: relative;
      }
      .bx-detail{
        width: 100%;
        height: auto;
        padding: 20px 10px 20px 25px;
        position: relative;
        left: 0;
        overflow: hidden;
      }
    }
    .wrap-info{
      padding: 0;
      width: 43%;
      height: auto;
      float: left;
    }
    .wrap-table{ 
      width: 57%;
      float: left;
      padding: 0 10px 0 20px;
      height: 400px;   
    }
  }
  @media screen and (max-width: 580px) {
    .wrap-map{
      .bx-map{
        height: 400px; 
      }
    }
    .wrap-info{
      padding: 0 15px 20px 0;
      width: 100%;
    }
    .wrap-table{ 
      width: 100%;
      padding: 0 10px 0 0;
      height: 400px;   
    }
  }
</style>