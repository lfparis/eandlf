<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
    <script type="text/javascript">
      var map;
      var grayStyles = [
        {
          featureType: "all",
          stylers: [
            { saturation: -90 },
            { lightness: 50 }
          ]
        },
      ];
      var mapOptions = {
        center: new google.maps.LatLng(41.325663, 19.8029607),
        zoom: 15,
        styles: grayStyles,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      function initialize() {
        map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
      }

      google.maps.event.addDomListener(window, 'load', initialize);
    </script>
