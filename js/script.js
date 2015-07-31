$(function() {
	$('.hum-btn').on('click', function() {
		$humbtn = $('.hum-btn');
		// when pressing button toggle class 'open' to both hum-btn div and hum-line div
		$humbtn.toggleClass('open');
		$humbtn.children('.hum-line').toggleClass('open');
	});
});

