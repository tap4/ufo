var stage=1;
var newText = [
"1111",
"2222",
"With closer consideration given to the birth of the internet, we see that there are 2 distinct patterns."+
" Is the data more accurately predicting internet access, rather than extra-terrestial visits?",
"Internet Access data from U.S. Census Reports is used to build this graph.",
"It seems that Internet Access is an excellent predictor of # of Sightings"];

document.getElementById("button").addEventListener("click", function(){
    stage=stage+1;
    updatePage(stage);
});

function updatePage(stage){
	document.getElementById("textBox").innerHTML=newText[stage];
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