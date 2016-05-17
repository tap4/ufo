function draw4thChart() {

           var data = google.visualization.arrayToDataTable([
          ['Internet Access', 'Sightings'],
          [ 0, 375], //1993
          [ 18, 1429],//1997
          [ 41.5,     3073],//2000
          [ 50.4,      3512],//2001
          [ 54.7,      4402],//2003
          [ 61.7,    4712],//2007
          [ 68.7,     4964],//2009
          [ 71.1,      4741],//2010
          [ 71.7,      5576]//2011
        ]);

        var options = {
          title: 'Internet Access vs. UFO Sightings Reported',
          titleTextStyle: {fontSize: 20},
          backgroundColor: { stroke: 'khaki', rx: 10, ry: 10, strokeWidth: 10, fill: 'AliceBlue' },
          trendlines: {
                  0: {
                  type: 'linear',
                  color: 'green',
                  lineWidth: 3,
                  opacity: 0.3,
                  showR2: true,
                  visibleInLegend: true}},
          hAxis: {title: '% of US Households with Internet Access', minValue: 0, maxValue: 100},
          titleTextStyle: {fontSize: 20},
                  backgroundColor: { stroke: 'khaki', rx: 10, ry: 10, strokeWidth: 10, fill: 'AliceBlue' },
          vAxis: {title: 'UFO Sightings Reported', minValue: 0, maxValue: 15},
          legend: 'none'
        };

        chart = new google.visualization.ScatterChart(document.getElementById('chart'));

        chart.draw(data, options);
    }