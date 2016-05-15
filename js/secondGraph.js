
function draw2ndChart() {

          var data = google.visualization.arrayToDataTable([
          ['Year', 'Pre-Internet', 'Post-Internet'],
          ['1975',  372, null],
          ['1976',  335, null],
          ['1977', 311, null],
          ['1978',  392, null],
          ['1979',  291, null],
          ['1980', 291, null],
          ['1981',  205, null],
          ['1982',  218, null],
          ['1983',  190, null],
          ['1984',  210, null],
          ['1985',  252, null],
          ['1986', 225, null],
          ['1987',  267, null],
          ['1988',  280, null],
          ['1989',  296, null],
          ['1990', 305, null],
          ['1991',  269, null],
          ['1992',  298, null],
          ['1993',  375, null],
          ['1994', 488, null],
          ['', 975, 975],
          ['1995', null,  1462],
          ['1996',null,  1002],
          ['1997',null,  1429],
          ['1998',null, 2007],
          ['1999',null,  3140],
          ['2000',null,  3073],
          ['2001',null, 3512],
          ['2002',null,  3665],
          ['2003',null,  4402],
          ['2004',null, 4724],
          ['2005',null,  4495],
          ['2006',null,  4142],
          ['2007',null, 4712],
          ['2008',null,  5274],
          ['2009',null,  4964],
          ['2010',null, 4741],
          ['2011',null,  5576],
          ['2012',null,  8053],
          ['2013',null, 7748],
          ['2014',null,  8600],
          ['2015',null,  6774]
        ]);

        

        var options = {
          title: 'UFO Sightings',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        chart = new google.visualization.AreaChart(document.getElementById('chart'));
        chart.draw(data, options);
    }