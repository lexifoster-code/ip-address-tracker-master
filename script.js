var map = L.map('map').setView([39.82, -98.58], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([39.82, -98.58]).addTo(map);






const TrackBtn = document.getElementById('trackBtn');
const IpAddressInput = document.getElementById('ipAddress')
const Api_Key = "at_ewspdIq8NTP0KyeJrjQJJ0pYJCUao";

function updateMarkerPosition(lat, lng) {
    marker.setLatLng([lat, lng]);  // Update the marker's position
    map.panTo([lat, lng]);          // Optional: Move the map's center to the new marker position
}

TrackBtn.addEventListener("click" ,function(){
    const IpAddress = IpAddressInput.value.trim()

    if (!IpAddress) {
        alert('Please Input an IP  Address')
        return
    }


    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=at_ewspdIq8NTP0KyeJrjQJJ0pYJCUao&ipAddress=${IpAddress}`;

    

fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Display the result in 'myDiv'
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <p>IP Address: ${data.ip}</p>
                <p>Location: ${data.location.city}, ${data.location.region}, ${data.location.country}</p>
                <p>Timezone: ${data.location.timezone}</p>
                <p>ISP: ${data.isp}</p>
            `;
            const lat = data.location.lat;
            const lng = data.location.lng

            if (lat && lng) {
                updateMarkerPosition(lat , lng)
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to retrieve data. Please try again later.');
        });
       
});

