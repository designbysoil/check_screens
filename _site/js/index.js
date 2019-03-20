var ring = document.getElementById('bm');

var animData = {
	wrapper: ring,
	animType: 'svg',
	loop: true,
	prerender: false,
	autoplay: false,
	autoloadSegments: true,
	path: 'data.json'
};

var anim = bodymovin.loadAnimation(animData);

anim.addEventListener('DOMLoaded', function () {
	anim.playSegments([[0, 50],[50, 0]], true);
});

$(ring).click(function () { // active state
    anim.playSegments([[51, 80],[80, 51]], true);
    $(ring).delay(2000).fadeOut(300);
});