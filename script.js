/**
 * load content into our page
 * @param {string} content - file containing content
 */
function load_(content)
{
    $('.content').load(content, function() {
        if (console) {
        	console.log(content + ' loaded successfully.');
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

