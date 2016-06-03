jQuery(function($) {'use strict';

	//Responsive Nav
	$('li.dropdown').find('.fa-angle-down').each(function(){
		$(this).on('click', function(){
			if( $(window).width() < 768 ) {
				$(this).parent().next().slideToggle();
			}
			return false;
		});
	});

	//Fit Vids
	if( $('#video-container').length ) {
		$("#video-container").fitVids();
	}

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){

		$('.main-slider').addClass('animate-in');
		$('.preloader').remove();
		//End Preloader

		if( $('.masonery_area').length ) {
			$('.masonery_area').masonry();//Masonry
		}

		var $portfolio_selectors = $('.portfolio-filter >li>a');
		
		if($portfolio_selectors.length) {
			
			var $portfolio = $('.portfolio-items');
			$portfolio.isotope({
				itemSelector : '.portfolio-item',
				layoutMode : 'fitRows'
			});
			
			$portfolio_selectors.on('click', function(){
				$portfolio_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
				return false;
			});
		}

	});


	$('.timer').each(count);
	function count(options) {
		var $this = $(this);
		options = $.extend({}, options || {}, $this.data('countToOptions') || {});
		$this.countTo(options);
	}
		
	// Search
	$('.fa-search').on('click', function() {
		$('.field-toggle').fadeToggle(200);
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
		});
	});

	// Progress Bar
	$.each($('div.progress-bar'),function(){
		$(this).css('width', $(this).attr('data-transition')+'%');
	});

	if( $('#gmap').length ) {
		var map;

		map = new GMaps({
			el: '#gmap',
			lat: 43.04446,
			lng: -76.130791,
			scrollwheel:false,
			zoom: 16,
			zoomControl : false,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});

		map.addMarker({
			lat: 43.04446,
			lng: -76.130791,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#3e8bff',
		});
	}

});
    /*Funcion para mostrar el item para la seleccion de idioma*/
	function ver(n) {
	               document.getElementById("subseccion"+n).style.display="block";
	               }
	function ocultar(n) {
	               document.getElementById("subseccion"+n).style.display="none";
	               }

    /**Funcion para mostrar el contenedor que contiene los items2*/ 
    function verItems2(n) {
	               document.getElementById("items1").style.display="none";
	               document.getElementById("items-"+n).style.display="block";
	               document.getElementById("action-icons-grid").style.display="block";
	               document.getElementById("action-icons-list").style.display="none";
	              }
	function ocultarItems2(n) {
					document.getElementById("items1").style.display="block";
					document.getElementById("items-"+n).style.display="none";
					document.getElementById("action-icons-grid").style.display="none";
	               document.getElementById("action-icons-list").style.display="block";

			      }            

function initMap() {
  var myLatLng = {lat: 5.6334704, lng: -75.3229741};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    scrollwheel: true,
    zoomControl: false,
    zoom: 8
  });

  // Create a marker and set its position.
  var medellin = {lat: 6.1707179, lng: -75.5759921};
  var marker = new google.maps.Marker({
    map: map,
    position: medellin ,
    title: 'Hello World!'
  });

 	var manizales = {lat: 5.0631526, lng: -75.4969817};
  var marker2 = new google.maps.Marker({
    map: map,
    position: manizales,
    title: 'Hello World!'
  });
}

//Codigo que permitira cambiar la imagen principal en la descipcion del producto al hacer click sobre la que se quiere ver

function cambiar(ruta,id){
	imagen1=new Image();
	imagen1.src=ruta;
	document.images['img-principal'].src=imagen1.src;
	switch (id) {
		case 1:
			document.getElementById(id).style.opacity=1;
			document.getElementById(2).style.opacity=0.5;
			document.getElementById(3).style.opacity=0.5;
			document.getElementById(4).style.opacity=0.5;
			break;
		case 2:
			document.getElementById(id).style.opacity=1;
			document.getElementById(1).style.opacity=0.5;
			document.getElementById(3).style.opacity=0.5;
			document.getElementById(4).style.opacity=0.5;
			break;
		case 3:
			document.getElementById(id).style.opacity=1;
			document.getElementById(4).style.opacity=0.5;
			document.getElementById(1).style.opacity=0.5;
			document.getElementById(2).style.opacity=0.5;
			break;
		case 4:
			document.getElementById(id).style.opacity=1;
			document.getElementById(1).style.opacity=0.5;
			document.getElementById(2).style.opacity=0.5;
			document.getElementById(3).style.opacity=0.5;
			break;
		default:
			// statements_def
			break;
	}
	
}

