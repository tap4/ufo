google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
var chart;
      function drawChart() { 
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sightings'],
          ['1975',  372],
          ['1976',  335],
          ['1977', 311],
          ['1978',  392],
          ['1979',  291],
          ['1980', 291],
          ['1981',  205],
          ['1982',  218],
          ['1983',  190],
          ['1984',  210],
          ['1985',  252],
          ['1986', 225],
          ['1987',  267],
          ['1988',  280],
          ['1989',  296],
          ['1990', 305],
          ['1991',  269],
          ['1992',  298],
          ['1993',  375],
          ['1994', 488],
          ['1995',  1462],
          ['1996',  1002],
          ['1997',  1429],
          ['1998', 2007],
          ['1999',  3140],
          ['2000',  3073],
          ['2001', 3512],
          ['2002',  3665],
          ['2003',  4402],
          ['2004', 4724],
          ['2005',  4495],
          ['2006',  4142],
          ['2007', 4712],
          ['2008',  5274],
          ['2009',  4964],
          ['2010', 4741],
          ['2011',  5576],
          ['2012',  8053],
          ['2013', 7748],
          ['2014',  8600],
          ['2015',  6774]
        ]);

        var options = {
          title: 'UFO Sightings',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        chart = new google.visualization.AreaChart(document.getElementById('chart'));

        chart.draw(data, options);
      }