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
	 * @param {element} btn - the button that called the function
	 * @param {string} content - file containing content
	 */
 	function load_()
	 {
		//toggleBtnColor(btn);
		var content = this.getAttribute('href');
		$('.content').load(content, function() {
			if (console) {
				console.log(content + ' loaded successfully.');
			}
		});
	}	

	/**
	 * remove content from our page
	 * @param {element} btn - the button that called the function
	 */
 	function unload_(btn)
	 {
	    //toggleBtnColor(btn);
	    $('.content').empty();
	}	

	function navHandler(){
		var navLinks = document.querySelectorAll('.mdl-navigation__link');
		for (var i = 0; i < navLinks.length; i++){
			navLinks[i].addEventListener('click', load_);
		}
	}

	navHandler();
});