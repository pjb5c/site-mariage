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

var stamen = L.tileLayer('https://tiles-eu.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg', {
    maxZoom: 16,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})

var alidade = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
})

var map = L.map('map', {
    center: [43.1576, 6.4604],
    zoom: 11,
    layers: [stamen, alidade]
});

var baseMaps = {
    "Détaillé": alidade,
    "Aquarelle": stamen
};

var layerControl = L.control.layers(baseMaps).addTo(map);

var icon = L.icon({
    iconUrl: 'img/map-marker.ico',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
});
var marker_mairie = L.marker([43.16051, 6.46709], {icon: icon}).addTo(map).bindTooltip("<b>Mairie</b>", {className: 'tooltip'});
var marker_eglise = L.marker([43.16007, 6.48085], {icon: icon}).addTo(map).bindTooltip("<b>Église</b>", {className: 'tooltip'});
var marker_resto = L.marker([43.15178, 6.42941], {icon: icon}).addTo(map).bindTooltip("<b>Les Canetons</b>", {className: 'tooltip'});
var marker_parmai = L.marker([43.160455, 6.466764], {icon: icon}).addTo(map).bindTooltip("<b>Parking Mairie</b>", {className: 'tooltip'});
var marker_paregl = L.marker([43.15979, 6.48025], {icon: icon}).addTo(map).bindTooltip("<b>Parking Église</b>", {className: 'tooltip'});
var marker_parcav = L.marker([43.152486, 6.42834], {icon: icon}).addTo(map).bindTooltip("<b>Parking Cavalière</b>", {className: 'tooltip'});


/*! Jack In The Box - v0.0.5 - 2014-01-15
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){jQuery(function(){return $.jackInTheBox=function(a,b){var c,d=this;return c="",this.settings={},this.$element=$(a),this.getSetting=function(a){return this.settings[a]},this.callSettingFunction=function(a,b){return null==b&&(b=[]),this.settings[a].apply(this,b)},this.mobileDevice=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},this.visible=function(a){var b,c,e,f;return f=d.$window.scrollTop(),e=f+d.$window.height()-d.settings.offset,c=a.offset().top,b=c+a.height(),e>=c&&b>=f},this.scrollHandler=function(){return d.$window.scroll(function(){return d.show()})},this.show=function(){return d.$boxes.each(function(a,b){var c;return c=$(b),d.visible(c)?c.css({visibility:"visible"}).addClass(d.settings.animateClass):void 0})},this.init=function(){return this.settings=$.extend({},this.defaults,b),this.$window=$(window),this.$boxes=$("."+this.settings.boxClass).css({visibility:"hidden"}),this.$boxes.length?(this.scrollHandler(),this.show()):void 0},this.mobileDevice()||this.init(),this},$.jackInTheBox.prototype.defaults={boxClass:"box",animateClass:"animated",offset:0},$.fn.jackInTheBox=function(a){return this.each(function(){var b;return void 0===$(this).data("jackInTheBox")?(b=new $.jackInTheBox(this,a),$(this).data("jackInTheBox",b)):void 0})}})}).call(this);

$(function() {
    $('body').jackInTheBox();
  });
  
  
  
  