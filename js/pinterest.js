 
(function(d){
    var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');
    p.type = 'text/javascript';
    p.async = true;
    p.src = '//assets.pinterest.com/js/pinit.js';
    f.parentNode.insertBefore(p, f);
}(document));

$(function() {
    var fonts = 'https://fonts.googleapis.com/css?family=Volkhov:400,700|Open+Sans:400,700|Spectral:400,700';
    if (document.createStyleSheet) document.createStyleSheet(fonts);
    else $("head").append($("<link rel='stylesheet' href='"+ fonts +"' type='text/css' media='screen' />"));
});