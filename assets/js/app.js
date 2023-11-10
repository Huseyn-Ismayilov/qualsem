$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 10) {
		$(".site_header").addClass("scroll_down");
	} else {
		$(".site_header").removeClass("scroll_down");
	}
});



$('.site_header .toggle, .mobile_menu .close_btn').click(function () {
	$('.mobile_menu').toggleClass('opened');
	$('body').toggleClass('overflow_hidden');
	$('.site_header .toggle').toggleClass('opened')
});

$('.mobile_menu .menu .dropdown .nav_link').click(function (e) {
	$(this).next().toggleClass('opened');
	return false;
});
$('.mobile_menu .menu .back_btn').click(function (e) {
	$(this).parent().removeClass('opened');
});

// end


// end
$(document).click(function (event) {
	if (!$(event.target).closest(".site_header .toggle, .mobile_menu .inner").length) {
		$("body").find(".mobile_menu .inner").parent().removeClass("opened");
		$('.site_header .toggle').removeClass('opened');
	}
});



$('.select_language .btn').click(function () {
	$(this).toggleClass('active');
	$(this).next().slideToggle()
});


// 

function updSwiperNumericPagination() {
	this.el.querySelector(".swiper-counter").innerHTML = '<span class="count">' + (this.realIndex + 1) + '</span>/<span class="total">' + this.el.slidesQuantity + "</span>";
}

$(".productFeatures .slider").each(function () {
	// Getting slides quantity before slider clones them
	this.slidesQuantity = this.querySelectorAll(".swiper-slide").length;

	// Swiper initialization
	new Swiper(this, {
		speed: 800,
		loop: false,
		direction: 'vertical',
		pagination: {
			el: this.querySelector(".swiper-pagination")
		},
		navigation: {
			nextEl: '.next_arrow',
			prevEl: '.prev_arrow',
		},
		on: {
			init: updSwiperNumericPagination,
			slideChange: updSwiperNumericPagination
		}
	});
});

// End




//Make the DIV element draggagle:
// dragElement(document.getElementById("mydiv"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }


// 


$(document).ready(function () {
	$('.hero .icon').draggable();
});


//header animation on load
$(document).ready(function () {
	setTimeout(function () {
		$(".hero .icon").addClass("opened");
	}, 0);
});