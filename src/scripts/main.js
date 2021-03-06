'use strict';

$(document).ready(function(){
	$('#main-navigation').toc({
		'smoothScrolling': true, //enable or disable smooth scrolling on click
		'prefix': 'nav', //prefix for anchor tags and class names
		'selectors': 'header>.toc-break',
	});

	$('nav.vertical a,nav.horizontal a').not('.disabled').click(function(){
		$(this).closest('li').siblings().find('a').removeClass('active');
		$(this).addClass('active');
	});
});