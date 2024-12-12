# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

-Frontend Mentor - IP Address Tracker Solution
This is a solution to the IP address tracker challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Table of contents
Overview
The challenge
Screenshot
Links
My process
Built with
What I learned
Challenges
Continued development
Useful resources
Author
Acknowledgments
Overview
The challenge
Users should be able to:

View the optimal layout for each page depending on their device's screen size.
See hover states for all interactive elements on the page.
See their own IP address on the map on the initial page load.
Search for any IP address or domain and see the key information and location on the map.
Screenshot

Links
Solution URL: https://github.com/your-username/ip-address-tracker
Live Site URL: https://your-live-site-url.com
My process
Built with
Semantic HTML5 markup
CSS custom properties
Flexbox
Mobile-first workflow
JavaScript
Leaflet.js for interactive maps
ipify API for IP address geolocation
What I learned
Leaflet.js: I learned how to integrate an interactive map into a web application using Leaflet.js. This was an interesting experience since I had to learn how to use a mapping library to display real-world data like the location of an IP address.

Geolocation API: I gained hands-on experience working with geolocation APIs to retrieve information about an IP address, such as its location, timezone, and ISP.

CSS Flexbox: I used Flexbox extensively to create a responsive layout that adapts to different screen sizes, ensuring that the app looks great on both mobile and desktop devices.

Here’s an example of a key code snippet I used to handle the map and update the marker based on IP address geolocation:

javascript
Copy code
function updateMarkerPosition(lat, lng) {
    marker.setLatLng([lat, lng]);  // Update the marker's position on the map
    map.panTo([lat, lng]);          // Optional: Move the map's center to the new marker position
}
Challenges
Positioning the results box: The biggest challenge I faced was positioning the results box (.result div). I struggled with ensuring it would be properly aligned and responsive, especially across different screen sizes. Flexbox helped a lot, but I had to experiment with position: absolute and z-index to get the positioning just right.

Updating the marker: Another challenge was updating the map marker based on the fetched IP address location. The map needed to center itself on the new coordinates every time a new IP address was searched. While the Leaflet.js API made this possible, it was tricky to update the map dynamically without affecting the overall layout.

Everything else, like handling the fetch requests and formatting the API response, was fairly straightforward once I reviewed the ipify API documentation. It just required a little searching to figure out how to best format the fetch requests and update the page with the results.

Continued development
In the future, I plan to:

Improve Error Handling: I want to refine the error handling so that the app is more user-friendly when an invalid IP address or domain is entered.
Add More Features: I plan to add features like a history of IP address searches or the ability to search by location instead of IP.
Optimize Performance: I would like to optimize the app’s performance and look into lazy loading or caching data for faster response times.
Useful resources
Leaflet Documentation - The official documentation helped me a lot in getting started with Leaflet.js and understanding how to integrate it into my project.
ipify API - The API documentation was essential for fetching the IP address geolocation data.
Author
Website - Your Name
Frontend Mentor - @yourusername
Twitter - @yourusername
Acknowledgments
A huge thanks to the Frontend Mentor community for providing such interesting challenges and resources to help me improve my skills.
Special shoutout to the creators of Leaflet.js and ipify API, whose tools made this project possible.
