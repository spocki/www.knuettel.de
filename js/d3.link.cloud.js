var LAYOUT = 1;
var DATABASE = 2;
var JAVA = 3;
var JAVASCRIPT = 4;
var IDE = 5;

var renderLinkCloud = function (links) {

    var fill = d3.scale.category20();

    var bodyHeight = window.innerHeight - 60;
    var bodyWidth = window.innerWidth;

    d3.layout.cloud().size([bodyWidth, bodyHeight])
        .words(links)
        .padding(0)
        .rotate(function () {
            return ~~(Math.random() * 4) * 45 + 270;
        })
        .font("Impact")
        .fontSize(function (d) {
            return ( 20 + Math.random() * 50 );
        })
        .on("end", draw)
        .start();

    function draw(words) {
        d3.select("#content").append("svg")
            .attr("width", bodyWidth)
            .attr("height", bodyHeight)
            .append("g")
            .attr("transform", "translate(" + innerWidth / 2 + "," + innerHeight / 2 + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function (d) {
                return d.size + "px";
            })
            .style("font-family", "Impact")
            .style("fill", function (d, i) {
                return fill(d.type);
            })
            .attr("text-anchor", "middle")
            .attr("transform", function (d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .on("click", function (d) {
                window.location.href = d.link;
            })
            .text(function (d) {
                return d.text;
            });
    }
}
