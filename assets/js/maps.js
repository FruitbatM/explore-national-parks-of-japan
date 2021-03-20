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
      info: `<img src="assets/images/fuji-hakone-izu.jpg" class="img-fluid" alt="Fuji-Hakone-Izu National Park"></img>
      <h4 class="py-3">Fuji Hakone Izu National Park</h4>
      <p>Fuji Hakone Izu is the most popular of Japan’s national parks due to its close proximity to Tokyo.
      It is famous for its ancient history, its shrine and hot springs in addition to views of nearby Mount Fuji.</p>`
    },
    {
      coordinates: {lat: 43.5655079, lng: 144.3598874}, // Akan Mashu National Park
      content: '<h5>Akan Mashu National Park</h5>',
      info: `<img src="assets/images/" class="img-fluid" alt="Fuji-Hakone-Izu National Park">
      <h4 class="py-3">Akan Mashu National Park</h4>
      <p>One of the oldest national parks in Japan with he stunning scenery on show makes the park wonderful to explore
      and its diverse ecosystems and wide range of attractions only add to its splendor. Visitors could spend weeks amidst
      all the natural wonders of Akan Mashu and still not have seen everything. With incredible volcanic craters, sprawling
      forests and crystal clear lakes; immersing yourself in the pristine environment will fill you with peace and a constant sense
      of amazement at the breathtaking beauty around you.</p>`
    },
    {
      coordinates: {lat: 44.1528287, lng: 145.1845915}, // Shiretoko National Park
      content: '<h5>Shiretoko National Park</h5>',
      info: `<img src="assets/images/" class="img-fluid" alt="Fuji-Hakone-Izu National Park">
      <h4>Shiretoko National Park</h4>
      <p>The national park is located in the island of Hokkaido and is considered a UNESCO World Heritage Site. One of the highlights 
      of this park is the large population of brown bears. During the summer months, bear watching from sightseeing boats is a popular 
      activity. Roads cover only one-third of the park; the remainder is reserved for those adventurous enough to explore by boat or on foot.</p>`
    },
    {
      coordinates: {lat: 36.8936306, lng: 139.6322278}, // Nikko National Park
      content: '<h5>Nikko National Park</h5>',
      info: `<img src="assets/images/" class="img-fluid" alt="Nikko National Park">
      <h4>Nikko National Park</h4>
      <p> It is a UNESCO World Heritage Site, home to historic shrines—including Toshogu, the most decorated shrine in Japan—and natural wonders 
      such as onsen and waterfalls. This park makes a good day trip or overnight trip from Tokyo.</p>`
    },
    {
      coordinates: {lat: 30.3464332, lng: 130.5036985}, // Yakushima National Park 
      content: '<h5>Yakushima National Park</h5>',
      info: `<img src="assets/images/yakushima_np.jpg" class="img-fluid" alt="Yakushima National Park">
      <h4>Yakushima National Park</h4>
      <p>This national park is located on an island south of the Kagoshima Prefecture. This heavily forested, subtropical island surges with life.
      It is crisscrossed with extensive walking and hiking trails, some passing by gorgeous waterfalls and leading to the tallest peaks in southern Japan.
      It is home to some of Japan's oldest trees, ancient cedars known as yakusugi, which are more than 1,000 years old.
      </p>`
    },
    {
      coordinates: {lat: 33.5036336, lng: 135.828385}, // Yoshino-Kumano National Park 
      content: '<h5>Yoshino Kumano National Park</h5>',
      info: `<img src="assets/images/yoshino-kumano-np" class="img-fluid" alt="Yoshino-Kumano National Park ">
      <h4>Yoshino Kumano National Park</h4>
      <p>This park in the Kansai region is home to two UNESCO World Heritage Sites, Mount Yoshino and the Kumano Region. Mount Yoshino, home to more than 30,000 cherry trees, 
      is the most famous cherry blossom viewing location in Japan. It features over 30,000 cherry trees planted around the slopes.</p>`
    },
    {
      coordinates: {lat: 40.5545129, lng: 140.8845628}, // Towada Hachimantai National Park
      content: '<h5>Towada Hachimantai National Park</h5>',
      info: `<img src="assets/images/towada-hachimantai-np.jpg" class="img-fluid" alt="Towada Hachimantai National Park">
      <h4>Towada Hachimantai National Park</h4>
      <p>Located in the Tohoku Region, this park is centered around the Hachimantai mountains and Lake Towada. Within its borders are rustic onsen, or hot springs. In autumn,
       it is a prime viewing location for Koyo, or viewing colorful leaves.</p>`
    },
    {
      coordinates: {lat: 32.8974879, lng: 131.1000753}, // Aso Kuju National Park
      content: '<h5>Aso Kuju National Park</h5>',
      info: `<img src="assets/images/" class="img-fluid" alt="Aso Kuju National Park">
      <h4>Aso Kuju National Park</h4>
      <p>One of Japan’s oldest national parks, Aso offers dramatic scenery of volcanic steam rising above stark tans, oranges, greys, and reds, the product of the active volcano 
      Mount Aso, and others in the Kuju Mountains. Hiking the volcanic craters is a popular activity. Due to the volcanic activity, several hot spring towns are located just outside the park.</p>`
    },
    {
      coordinates: {lat: 24.3463485, lng: 123.660927}, // Iriomote Ishigaki National Park
      content: '<h5>Iriomote Ishigaki National Park</h5>',
      info: `<img src="assets/images/" class="img-fluid" alt="Iriomote Ishigaki National Park">
      <h4>Iriomote Ishigaki National Park</h4>
      <p>This park spans several tropical islands and the underwater habitats between them. Scuba diving, snorkeling, swimming, and beach activities are popular. The adventurous traveler can even kayak a 
      true jungle river lined with mangrove trees.</p>`
    },
    {
      coordinates: {lat: 27.0710145, lng: 142.2096397}, // Ogasawara National Park 
      content: '<h5>Ogasawara National Park</h5>',
      info: `<img src="assets/images/" class="img-fluid" alt="Ogasawara National Park">
      <h4>Ogasawara National Park</h4>
      <p>The Ogasawara Islands also know as Bonin Island are a UNESCO World Heritage Site 1,000 kilometers south of Tokyo, in the Pacific Ocean. These subtropical islands are home to a number of 
      plant and animal species found nowhere else in the world. Dolphin and whale watching are popular activities, as well as kayaking and scuba diving in the warm coastal waters.</p>`
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

      // Info window appears on mouseover and disappears on mouseout
      marker.addListener('mouseover', function() {
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