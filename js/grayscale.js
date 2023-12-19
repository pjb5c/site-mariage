/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function(){
    $(this).blur();
})

var map = L.map('map').setView([43.1576, 6.4604], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var icon = L.icon({
    iconUrl: 'img/map-marker.png',
    iconSize: [30, 50],
    iconAnchor: [15, 45],
});
var marker_mairie = L.marker([43.16051, 6.46709], {icon: icon}).addTo(map).bindPopup("<b>Mairie</b>")
var marker_eglise = L.marker([43.16007, 6.48085], {icon: icon}).addTo(map).bindPopup("<b>Église</b>")
var marker_villa = L.marker([43.15138, 6.42481], {icon: icon}).addTo(map).bindPopup("<b>Villa Mauresque</b>")