//Add Google Maps
function initMap() {
  const japan = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 36.1783653, lng: 135.0709152 },
  zoom: 8,
  });
}

//Create markers
const locations = [
  {
    coordinates: {lat:35.2326407, lng:139.013563}, // Fuji-Hakone-Izu National Park  
    title: '<h3>Fuji Hakone Izu National Park</h3>'
    data: `<h3>Fuji Hakone Izu National Park</h3>
    <img src="assets/images/fuji-hakone-izu.jpg" class="img-fluid" alt="Fuji-Hakone-Izu National Park">
    <p>Fuji Hakone Izu is the most popular of Japan’s national parks due to its close proximity to Tokyo.
    It is famous for its ancient history, its shrine and hot springs in addition to views of nearby Mount Fuji.</p>`
  },
  {
  coordinates: {lat:43.5655079, lng:144.3598874}, // Akan Mashu National Park
  title: '<h3>Akan Mashu National Park</h3>'
    data: `<h3>Akan Mashu National Park</h3>
    <img src="assets/images/fuji-hakone-izu.jpg" class="img-fluid" alt="Fuji-Hakone-Izu National Park">
    <p>One of the oldest national parks in Japan with he stunning scenery on show makes the park wonderful to explore
    and its diverse ecosystems and wide range of attractions only add to its splendor. Visitors could spend weeks amidst
    all the natural wonders of Akan Mashu and still not have seen everything. With incredible volcanic craters, sprawling
    forests and crystal clear lakes; immersing yourself in the pristine environment will fill you with peace and a constant sense
    of amazement at the breathtaking beauty around you.</p>`
  }

];

//Loop through markers 
for(let i = 0; i < locations.length; i++) {
  addMarker(locations[i]);
}

//Add marker
function addMarker(props) {
  const marker = new google.maps.Marker({
  position: props.coordinates,
  map: map,
  });
}

