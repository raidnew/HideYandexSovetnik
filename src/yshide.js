/*
 * raidnew@gmail.com
 */

function hideSovetnik(){
    var node = jQuery("div").filter(function(){ return jQuery(this).css('background-color') == "rgb(250, 223, 118)" || jQuery(this).css('background-color') == "#fadf76";})[0];
    while(node.parentNode.nodeName.toLowerCase() != "body"){
        node = node.parentNode;
    }
    jQuery(node).attr("style","display:none !important;");
    jQuery("html").attr("style","margin-top: 0");
}

jQuery(document).ready(function(){
    document.body.addEventListener('DOMSubtreeModified', function () {
        hideSovetnik();
    }, false);
});
