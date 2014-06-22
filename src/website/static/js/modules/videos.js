define(function(require, exports, module){
	"use strict";

	var $ = require('jquery');
	var videoJs = require('videojs');
	require('css!packages/videojs/video-js');
	require('videojsVimeo');

	$('video').each(function () {
		videoJs(this, {
			'techOrder': ["vimeo"],
			'src': this.src,
			'controls': false
		});
	});

	return exports;
});