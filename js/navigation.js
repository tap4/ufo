var stage=1;
var newText = [
"1111",
"2222",
"With closer consideration given to the birth of the internet, we see that there are 2 distinct patterns",
"Correlation chart; percentage internet access vs sightings reported",
"3 point correlation: xfiles popularity, percentage internet access, sightings"];

document.getElementById("button").addEventListener("click", function(){
    stage=stage+1;
    updatePage(stage);
});

function updatePage(stage){
	document.getElementById("textBox").innerHTML=newText[stage];
	chart.clearChart();
	if (stage==2) {draw2ndChart();}
	if (stage==3) {draw3rdChart();}
}