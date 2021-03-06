var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl1 = new TimelineMax({repeat:-1});
	var cta = document.getElementById('cta');
	var cta_txt = document.getElementsByClassName('cta_txt');
	var buttonExit = document.getElementById('button-exit');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		buttonExit.addEventListener('mouseover', function () {
            t.to(cta, .25, {backgroundColor: "#3bc0f8"});
            t.to(cta_txt, .25, {fill: "#262626" });
        });

        buttonExit.addEventListener('mouseout', function () {
            t.to(cta, .25, {backgroundColor: "#f5cc02"});
            t.to(cta_txt, .25, {fill: "#000" });
        });
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl1.set("#outline", {display:"block"}, "+=.5")
		.set("#outline", {display:"none"}, "+=.5")
		.set("#outline", {display:"block"}, "+=.5")
		.set("#outline", {display:"none"}, "+=.5")
		.set("#outline", {display:"block"}, "+=.5")
		.set("#outline", {display:"none"}, "+=.5")
		.set("#solid", {display:"none"})
		.set("#_1", {display:"block"})
		.set("#_2", {display:"block"}, "+=.1")
		.set("#_3", {display:"block"}, "+=.1")
		.set("#_4", {display:"block"}, "+=.1")
		.set("#_5", {display:"block"}, "+=.1")
		.set("#_6", {display:"block"}, "+=.1")
		.set("#_7", {display:"block"}, "+=.1")
		.set("#_8", {display:"block"}, "+=.1")
		.set("#_9", {display:"block"}, "+=.1")
		.set("#_10", {display:"block"}, "+=.1")
		.set("#_11", {display:"block"}, "+=.1")
		.set("#_12", {display:"block"}, "+=.1")
		.set("#_13", {display:"block"}, "+=.1")
		.set("#_14", {display:"block"}, "+=.1")
		.set("#_15", {display:"block"}, "+=.1")
		.set("#_16", {display:"block"}, "+=.1")
		.set("#_17", {display:"block"}, "+=.1")
		.set("#_18", {display:"block"}, "+=.1")
		.set("#_19", {display:"block"}, "+=.1")
		.set("#_20", {display:"block"}, "+=.1")
		.set(".dollar", {display:"none"}, "+=1");
		
	}


	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
