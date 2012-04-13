console.log('This would be the main JS file.');

jQuery(document).ready(function() {
    jQuery(".megamenu").megamenu();
		jQuery(".cycle").cycle({
			fit: 1,
			fx: 'fade',
			pager: '#smallnav', 
			pause:   1, 
			speed: 100,
			timeout:  100 
		});
});