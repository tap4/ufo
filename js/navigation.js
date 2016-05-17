var stage=1;
var newText = [
null,
null,
"<p>Let&#39s consider an earth-bound variable: THE INTERNET.  This global system of inter-connected networks has had an explosive impact on the way we humans share and aggregate knowledge and information.  How might it have impacted the frequency of UFO sightings reported? <br/><br/> The internet entered mainstream culture of the U.S. in the mid-90s.  Let&#39s use the year 1995 as our divider.  Once the data has been separated into 2 distinct sub-sets, as shown on the right, we can see there are 2 very different patterns of growth: pre-internet and internet.</p>",
 "Here, we only consider the secondary sub-set of the data: 1995 to present.  The U.S. Census Bureau provides us with Internet-Penetration rates.  Rather than examine the data in a simple chronological fashion,  we can instead compare UFO sightings against Internet Access.",
"It seems that Internet Access is an excellent predictor of the frequency of Reported UFO Sightings (however boring that explanation might sound!).",
"<p>But let&#39s try to keep it at least somewhat interesting.  <b>Art imitates life</b>, correct?  Were UFO Sightings more frequent during the X-Files craze of the late 90s/early2000s?  What impact did Scully and Mulder have on the public&#39s sensitivity to extra-terrestrial activity?</p> <p>Very little, or so it seems.  In the graph on the right, we&#39ve drilled down into the data a bit deeper, tracking UFO sightings on a monthly basis.  Green bubbles are months during a new XFiles season;red bubbles are months without new XFiles episodes premiering.  Here, it seems as though new X-Files episodes appear to have a dampening effect on the frequency of UFO Sightings.  Quite the opposite of what we might have expected.</p>   ",
"<p>However, this chart may be deceiving.</p><p>Consider that our horizontal axis is still displaying <b>% of Households with Internet Access</b>.  Our data is limited to an annual metric because more specific, month-by-month statistics are not readily available.  But we can safely assume that internet penetration steadily increased month-by-month, rather than a singular, huge leap at the end of each year.  And so, it&#39s quite likely that some of the variation from month-to-month is correlated with an increase in internet-access.</p><p>Try hovering your mouse over one of the bubbles.  A window will pop up with additional information, including the month/year for that data-point.  If you start at the bottom of one of the columns, and slide upwards, you&#39ll see that the bubbles have aligned themselves in almost perfect chronological fashion.</p>",
"Let&#39s manipulate the data just a bit to see if my hypothesis is correct.  Here, I&#39ve distributed each year's annual growth in Internet Access evenly across all 12 months of that year.  While we can&#39t assume this is completely accurate, it is surely closer to the truth than a single huge jump at the end of January.  But, as shown on the right, even with this adjustment, our data shows no noticeable increase in sightings during X-Files seasons.  If anything, it seems to be working in reverse."];

var dataSources = [
null,
null,
"<a href=&#34http://www.nuforc.org/webreports.html&#34>The National UFO Reporting Center Online Database</a>",
"<a href=&#34http://www.nuforc.org/webreports.html&#34>The National UFO Reporting Center Online Database</a><br/><a href=&#34http://www.census.gov/&#34>The U.S. Census Bureau</a>",
"<a href=&#34http://www.nuforc.org/webreports.html&#34>The National UFO Reporting Center Online Database</a><br/><a href=&#34http://www.census.gov/&#34>The U.S. Census Bureau</a>",
"<a href=&#34http://www.nuforc.org/webreports.html&#34>The National UFO Reporting Center Online Database</a><br/><a href=&#34http://www.imdb.com/title/tt0106179/?ref_=fn_al_tt_1&#34>The Internet Movie Database</a>",
"<a href=&#34http://www.nuforc.org/webreports.html&#34>The National UFO Reporting Center Online Database</a><br/><a href=&#34http://www.imdb.com/title/tt0106179/?ref_=fn_al_tt_1&#34>The Internet Movie Database</a>",
"<a href=&#34http://www.nuforc.org/webreports.html&#34>The National UFO Reporting Center Online Database</a><br/><a href=&#34http://www.imdb.com/title/tt0106179/?ref_=fn_al_tt_1&#34>The Internet Movie Database</a>"
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
		$('#alienPic').animate({
			bottom: "+=350"},1000,function()
			{
			//animation complete
			});
		}
	if (stage==3) {
		draw3rdChart();
		$('#alien_blue').animate({
			bottom: "+=350"},1000,function()
			{
			//animation complete
			});
	}
	if (stage==4) {
		draw4thChart();

		$(function () {
    		$("#alien_pink").animate({
       		bottom: "+=350"}, { duration: 1000, queue: false });
    		$("#alien_orange").animate({
       		bottom: "+=350"
    		}, { duration: 1000, queue: false });
		});
	}
	if (stage==5) {
		draw5thChart();
	}
	if (stage==6) {
		draw5thChart();
	}
	if (stage==7) {
		draw7thChart();
	}
}