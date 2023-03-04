// (function($) {

// 	"use strict";

// 	var fullHeight = function() {

// 		$('.js-fullheight').css('height', $(window).height());
// 		$(window).resize(function(){
// 			$('.js-fullheight').css('height', $(window).height());
// 		});

// 	};
// 	fullHeight();

// 	$('#sidebarCollapse').on('click', function () {
//       $('#sidebar').toggleClass('active');
//   });

// })(jQuery);

function openAside(){
	console.log("dasfafsasf");
	var aside=document.getElementById("aside");
	var main=document.getElementById("mainSection");
	aside.classList.remove("d-none");
	aside.classList.add("d-12");
	main.classList.remove("d-12");
	main.classList.add("d-none");
}
function closeAside(){
	var aside=document.getElementById("aside");
	var main=document.getElementById("mainSection");
	main.classList.remove("d-none");
	main.classList.add("d-12");
	aside.classList.remove("d-12");
	aside.classList.add("d-none");
}