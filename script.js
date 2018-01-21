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
function load_(btn,content)
{
	toggleBtnColor(btn);
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
    toggleBtnColor(btn);
    $('.content').empty();
}	

