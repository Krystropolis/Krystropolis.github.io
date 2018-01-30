// wait for the dom to load
$(document).ready(function() {
	/**
	 * toggles the button color between primary and accent colors
	 * @param {element} btn - the button to toggle
	 */
 	function toggleBtnColor(btn){
	 	if(btn.classList.contains('mdl-button--accent')){
	 		btn.classList.replace('mdl-button--accent','mdl-button--primary');
	 	} else {
	 		btn.classList.replace('mdl-button--primary','mdl-button--accent');
	 	}
	 }

	/**
	 * load content into our page
	 */
 	function load_()
	 {
		var content = this.getAttribute('value');
		$('.content').load(content + '.html', function() {
			if (console) {
				console.log(content + ' loaded successfully');
			}
		});
	}	

	/**
	 * remove content from our page
	 */
 	function unload_()
	 {
	    $('.content').empty();
	}	

	/**
	 * adds event handlers for all click events
	 */
	function clickHandlers(){
		// click events for navigation
		var navLinks = document.querySelectorAll('.mdl-navigation__link');
		for (var i = 0; i < navLinks.length; i++){
			navLinks[i].addEventListener('click', load_);
		}
	}

	clickHandlers();
	// initialize page with portfolio page temporarily
	document.querySelector('.nav-resume').click();
});