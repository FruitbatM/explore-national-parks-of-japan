//Add Google Maps

function initMap() {
  const options = {
    center: { lat: 36.1783653, lng: 135.0709152 },
    zoom: 4
  };
  
  //New map
  const map = new
  google.maps.Map(document.getElementById("map"), options);

  //Create markers
  const markers = [
    {
      coordinates: {lat: 35.2326407, lng: 139.013563}, // Fuji-Hakone-Izu National Park  
      content: '<h5>Fuji Hakone Izu National Park</h5>',
      info: `<img src="assets/images/fuji-hakone-izu.jpg" class="img-fluid np-img" alt="Fuji-Hakone-Izu National Park"></img>
      <h4 class="py-3 text-center">Fuji Hakone Izu National Park</h4>
      <p>
      Fuji Hakone Izu is the most popular of Japan’s national parks due to its close proximity to Tokyo.
      It is famous for its ancient history, its shrine, and hot springs in addition to views of nearby Mount Fuji.
      </p>
      <p>
      The mountain has been the natural soul of Japan since ancient times. In the park, you can wander through timeless forests, explore lava caves and bathe in hot springs. You can even swim with dolphins off the coast of the southern Izu islands.
      </p>
      <p class="pb-2">
      <strong>How to get there:</strong> From Shinjuku Station in Tokyo, take the JR Chuo Line to Otsuki Station. 
      There, transfer to the Fujikyu Railway Line to Kawaguchiko Station. This trip takes just under three hours.
      </p>`
    },
    {
      coordinates: {lat: 43.5655079, lng: 144.3598874}, // Akan Mashu National Park
      content: '<h5>Akan Mashu National Park</h5>',
      info: `<img src="assets/images/akan-mashu-np.jpg" class="img-fluid np-img" alt="Akan Mashu National Park">
      <h4 class="py-3 text-center">Akan Mashu National Park</h4>
      <p>
      One of the oldest national parks in Japan with the stunning scenery on show makes the park wonderful to explore
      and its diverse ecosystems and wide range of attractions only add to its splendor. It is in the eastern part of Hokkaido.
      Visitors could spend weeks amidst all the natural wonders of Akan Mashu and still not have seen everything. 
      </p>
      <p>
      With incredible volcanic craters, sprawling forests and crystal clear lakes; immersing yourself in the pristine environment will fill you with
      peace and a constant sense of amazement at the breathtaking beauty around you.
      </p>
      <p class="pb-2">
      <strong>How to get there:</strong> Public transportation is irregular, so it's best to rent a car after arriving in Hokkaido, making it easier to reach and explore the park.
      </p>`
    },
    {
      coordinates: {lat: 44.1528287, lng: 145.1845915}, // Shiretoko National Park
      content: '<h5>Shiretoko National Park</h5>',
      info: `<img src="assets/images/shiretoko-np.jpg" class="img-fluid np-img" alt="Shiretoko National Park">
      <h4 class="py-3 text-center">Shiretoko National Park</h4>
      <p>
      The national park is located in the island of Hokkaido and is considered a UNESCO World Heritage Site. One of the highlights 
      of this park is the large population of brown bears. During the summer months, bear watching from sightseeing boats is popular 
      activity. Roads cover only one-third of the park; the remainder is reserved for those adventurous enough to explore by boat or on foot.
      </p>
      <p>
      It is characterized by its majestically precipitous landscape, which was formed by volcanic activity and lava flows, and its richly diverse wildlife.
      </p>
      <p class="pb-2">
      <strong>How to get there:</strong> The nearest train station to the park is Shiretoko Shari Station, which can be reached using the Japan Rail Pass from either Abashiri Station 
      or Sapporo Station. Buses are available for the remainder of the journey during peak tourism seasons, but a rental car, available at the train station, is recommended.
      </p>`
    },
    {
      coordinates: {lat: 36.8936306, lng: 139.6322278}, // Nikko National Park
      content: '<h5>Nikko National Park</h5>',
      info: `<img src="assets/images/nikko-np.jpg" class="img-fluid np-img" alt="Nikko National Park">
      <h4 class="py-3 text-center">Nikko National Park</h4>
      <p> 
      Nikko National Park is in the mountain area that belongs to the volcanic belt, and you can fully enjoy a variety of different sceneries such 
      as waterfalls, lakes that were created by the volcanic activity. It is also famous for its many hot springs.
      </p>
      <p>
      It is a UNESCO World Heritage Site, home to historic shrines-including Toshogu, the most decorated shrine in Japan, and natural wonders 
      such as onsen and waterfalls. This park makes a good day trip or overnight trip from Tokyo.
      </p>
      <p class="pb-2">
      <strong>How to get there:</strong> From either Tokyo Station or Ueno Station, take the JR Tohoku Shinkansen to Utsunomiya Station. There, transfer to the JR Nikko Line to Nikko Station. 
      The trip takes between an hour and a half and two hours.
      </p>`
    },
    {
      coordinates: {lat: 30.3464332, lng: 130.5036985}, // Yakushima National Park 
      content: '<h5>Yakushima National Park</h5>',
      info: `<img src="assets/images/yakushima_np.jpg" class="img-fluid np-img" alt="Yakushima National Park">
      <h4 class="py-3 text-center">Yakushima National Park</h4>
      <p>
      This national park is located on an island south of the Kagoshima Prefecture. This heavily forested, subtropical island surges with life.
      It is crisscrossed with extensive walking and hiking trails, some passing by gorgeous waterfalls and leading to the tallest peaks in southern Japan.
      It is home to some of Japan's oldest trees, ancient cedars known as yakusugi, which are more than 1,000 years old.
      </p>
      <p>
      The other gifts of Yakushima are many, from the incredible Oko and Senpiro Falls, to the mystical forested valley of Shiratani Unsuikyu. Seaside pools serve 
      as natural onsens only accessible at low tide, like Hirauchi Kaichu Onsen.
      </p>
      <p class="pb-2">
      <strong>How to get there:</strong> You may make a direct flight from Osaka’s Itami Airport to Yakushima. Alternatively, boats and ferries depart from 
      Kagoshima, typically every one to three hours. Depending on the speed of the boat, the trip may last between two and four hours.
      </p>`
    },
    {
      coordinates: {lat: 33.5036336, lng: 135.828385}, // Yoshino-Kumano National Park 
      content: '<h5>Yoshino Kumano National Park</h5>',
      info: `<img src="assets/images/yoshino-kumano-np.jpg" class="img-fluid np-img" alt="Yoshino-Kumano National Park ">
      <h4 class="py-3 text-center">Yoshino Kumano National Park</h4>
      <p>
      This park in the Kansai region is home to two UNESCO World Heritage Sites, Mount Yoshino and the Kumano Region. Mount Yoshino, 
      home to more than 30,000 cherry trees, is the most famous cherry blossom viewing location in Japan. It features over 30,000 
      cherry trees planted around the slopes.
      </p>
      <p>
      The park's landscape includes vast mountain ranges, highland plateaus, river valleys, jagged cliffs, and the dense rainforests of the Kii Peninsula.
      </p>
      <p class="pb-2">
      <strong>How to get there:</strong> From Shin-Osaka Station, take a JR limited express to Shingu (260 min). From Tokyo Station, ride the Shinkansen to Kyoto (100 min), 
      then the Kintestu limited express to Yamato Kamiichi (120 min) and a bus to Odaigahara, (105 min).
      </p>`
    },
    {
      coordinates: {lat: 40.5545129, lng: 140.8845628}, // Towada Hachimantai National Park
      content: '<h5>Towada Hachimantai National Park</h5>',
      info: `<img src="assets/images/towada-hachimantai-np.jpg" class="img-fluid np-img" alt="Towada Hachimantai National Park">
      <h4 class="py-3 text-center">Towada Hachimantai National Park</h4>
      <p>
      Located in the Tohoku Region, this park is centered around the Hachimantai mountains and Lake Towada. Within its borders are rustic onsen, or hot springs.
      </p>
      <p>
      The park is known for its volcanoes, lakes, and mountain streams. Its face changes with the turning of the seasons, as vibrant spring turns to short, blazing summer 
      characterized by lush deciduous forests. Autumn turns the trees colorful tones of red and gold, and winter means pristine powder snow turning trees to 'snow monsters.'
      </p>
      <p class="pb-2">
      <strong>How to get there:</strong> From Tokyo Station, take the JR Akita Shinkansen to Tazawako Station. Trains run hourly and the trip lasts around three hours.
      </p>`
    },
    {
      coordinates: {lat: 32.8974879, lng: 131.1000753}, // Aso Kuju National Park
      content: '<h5>Aso Kuju National Park</h5>',
      info: `<img src="assets/images/aso-kuju-np.jpg" class="img-fluid np-img" alt="Aso Kuju National Park">
      <h4 class="py-3 text-center">Aso Kuju National Park</h4>
      <p>
      One of Japan’s oldest national parks, Aso offers dramatic scenery of volcanic steam rising above stark tans, oranges, greys, and reds, the product of the active volcano 
      Mount Aso, and others in the Kuju Mountains. Hiking the volcanic craters is a popular activity. Due to the volcanic activity, several hot spring towns are located just outside the park.
      </p>
      <p>
      The Kuju mountains are covered by a network of hiking trails with spectacular views. Between October and November, this is one of the best places in Japan to enjoy magnificent autumn foliage.
      </p>
      <p class="pb-2">
      <strong>How to get there:</strong> From Kumamoto Station, take the Hohi Main Line to Aso Station. Buses are available from the station to various regions of the park.
      </p>`
    },
    {
      coordinates: {lat: 24.4334539, lng: 123.7210239}, // Iriomote Ishigaki National Park
      content: '<h5>Iriomote Ishigaki National Park</h5>',
      info: `<img src="assets/images/iriomote-ishigaki-np.jpg" class="img-fluid np-img" alt="Iriomote Ishigaki National Park">
      <h4 class="py-3 text-center">Iriomote Ishigaki National Park</h4>
      <p>
      Iriomote Ishigaki National Park is the southernmost national park in Japan. It is a place where a wealth of nature can be found.
      Subtropical climate has provided a home for an astonishing diversity of nature. From sprawling mangrove forests to protected coral 
      reefs. Nature lovers will be spoiled for choice of places to explore and recreational activities to enjoy.
      </p>
      <p>
      For millions of years, powerful crustal movements have separated Iriomote-Ishigaki from the Asian continent. Its isolation meant 
      that its wildlife, such as the rare Iriomote wild cat, was shaped by the island’s unique environment.
      </p>
      <p class="pb-2">
      <strong>How to get there:</strong> From Tokyo’s Haneda Airport, take a direct flight to the New Ishigaki Airport.
      </p>`
    },
    {
      coordinates: {lat: 33.1649111, lng: 129.676887}, // Saikai National Park
      content: '<h5>Saikai National Park</h5>',
      info: `<img src="assets/images/sakai-np.jpg" class="img-fluid np-img" alt="Saikai National Park">
      <h4 class="py-3 text-center">Saikai National Park</h4>
      <p>
      Situated in northwestern Kyushu, Saikai National Park weaves together more than 400 small islands from several archipelagoes.
      The park’s dramatic landscapes and seascapes include drowned river valleys, myriad inlets, steep sea cliffs and stunning beaches.
      </p>
      <p class="pb-2">
      <strong>How to get there:</strong> To reach the Kitamatsuura Peninsula from Tokyo, take a flight from Haneda Airport to Nagasaki Airport (2 hr), 
      an airport bus to Sasebo (1 hr 15 min).  Municipal buses also depart from Sasebo Station to observation points and sightseeing spots on the Kujukushima Islands. 
      While it is possible to use such services to visit attractions within the park, renting a car around Sasebo Station is a more effective way to see the sights.
      </p>`
    }
  ];

  //Loop through markers 
  for(var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  // Marker function
  function addMarker(props) {
    const marker = new google.maps.Marker({
    position: props.coordinates,
    map: map,
  });

    if(props.content) {
      const infowindow = new google.maps.InfoWindow ({
        content:props.content
      });

      // Info window appears on click and disappears on mouseout
      // Mouseover listener did not work on iPhone
      marker.addListener('click', function() {
        infowindow.open(map, marker);

      google.maps.event.addListener(marker, 'mouseout', function() {
        infowindow.close();
        });
      });

      // Info shows in the side column when the marker is clicked
      google.maps.event.addListener(marker, 'click', (function(i) {

        return function() {
          document.getElementById('side-column').innerHTML = markers[i].info;
        };
      })(i));
    }
  }
}