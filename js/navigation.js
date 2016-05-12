var stage=0;
var newText = "With closer consideration given to the birth of the internet, we see that there are 2 distinct patterns";

document.getElementById("button").addEventListener("click", function(){
    stage=stage+1;
    updatePage(stage);
});

function updatePage(stage){
	if (stage==1)
		{
			document.getElementById("textBox").innerHTML=newText;
			chart.clearChart();
			draw2ndChart();

		}
}