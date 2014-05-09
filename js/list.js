var LAYOUT = 1;
var DATABASE = 2;
var JAVA = 3;
var JAVASCRIPT = 4;
var IDE = 5;

var types = ["NONE", "LAYOUT", "DATABASE", "JAVA"];

var list = function (links) {
    for (var counter = 0 ; counter < links.length ; counter++) {
        var link = links[counter];
        $("body").append("<a href='" + link.link + "'>" + link.text + "</a>"  + types[link.type] + "<br />");
    }
}