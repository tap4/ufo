var stage=1;
var newText = [
null,
null,
"Let&#39s consider an earth-bound variable: THE INTERNET.  This global system of inter-connected networks has had an explosive impact on the way we humans share and aggregate knowledge and information.  The internet really entered mainstream culture of the U.S. in the mid-90s. <br/><br/>   Let&#39s use the year 1995 as our divider.  Once the data has been separated into 2 distinct sub-sets, as shown on the right, we can see there are 2 very different patterns of growth: pre-internet and internet.",
 "Here, we consider only that secondary sub-set of the data: 1995 to present.  The U.S. Census Bureau provides us with Internet-Penetration rates.  Rather than examine the data in a simple chronological fashion,  we can instead compare UFO sightings against Internet Access.",
"Internet Access data from U.S. Census Reports is used to build this graph.",
"It seems that Internet Access is an excellent predictor of # of Sightings"];

var dataSources = [
null,
null,
"<a href=&#34http://www.nuforc.org/webreports.html&#34>The National UFO Reporting Center Online Database</a>",
"<a href=&#34http://www.nuforc.org/webreports.html&#34>The National UFO Reporting Center Online Database</a><br/><a href=&#34http://www.census.gov/&#34>The U.S. Census Bureau</a>",
"<a href=&#34http://www.nuforc.org/webreports.html&#34>The National UFO Reporting Center Online Database</a><br/><a href=&#34http://www.census.gov/&#34>The U.S. Census Bureau</a>"
];

document.getElementById("button").addEventListener("click", function(){
    stage=stage+1;
    updatePage(stage);
});

function updatePage(stage){
	document.getElementById("textBox").innerHTML=newText[stage];
	document.getElementById("dataSourceP").innerHTML=dataSources[stage];
	chart.clearChart();
	if (stage==2) {
		draw2ndChart();
		$('#alienPic2').animate({
			bottom: "+=100"},1000,function()
			{
			//animation complete
			});
		}
	if (stage==3) {
		draw3rdChart();
		$('#alienPic').animate({
			bottom: "+=350"},1000,function()
			{
			//animation complete
			});
	}
	if (stage==4) {
		draw4thChart();
		$('#alienPic2').animate({
			bottom: "+=100"},1000,function()
			{
			//animation complete
			});
	}
	if (stage==5) {
		draw5thChart();
		$('#alienPic2').animate({
			bottom: "+=330"},1000,function()
			{
			//animation complete
			});
	}
}