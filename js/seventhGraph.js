function draw7thChart() {

      var data = google.visualization.arrayToDataTable([
        ['ID', 'Internet Access', 'UFO Sightings Reported', 'X-Files on Air?'],
        ['Jan-93', 0.0, 17,  'no'],
        ['Feb-93', 0.21, 16,  'no'],
        ['Mar-93', 0.42, 20,  'no'],
        ['Aug-93',  1.47, 44,  'no'],
        ['Jul-93',  1.26, 47,  'no'],
        ['Jun-93',  1.05, 99,  'no'],
        ['May-93',  0.84, 30,  'no'],
        ['Apr-93',  0.63, 15,  'no'],
        ['Jan-03',  61.7,  327, 'no'],
        ['Dec-02',  61.44,  249, 'no'],
        ['Nov-02',  61.2,  295, 'no'],
        ['Oct-02',  60.96,  338, 'no'],
        ['Sep-02',  60.72,  376, 'no'],
        ['Aug-02',  60.48,  488, 'no'],
        ['Jul-02',  60.24,  434, 'no'],
        ['Jun-02',  60.0,  348, 'no'],
        ['May-02',  59.76,  251, 'yes'],
        ['Apr-02',  59.52,  191, 'yes'],
        ['Mar-02',  59.28,  197, 'yes'],
        ['Feb-02',  59.04,  260, 'no'],
        ['Jan-02',  58.8,  238, 'yes'],
        ['Dec-01',  57.9,  213, 'yes'],
        ['Nov-01',  57.1,  279, 'yes'],
        ['Oct-01',  56.3,  257, 'no'],
        ['Sep-01',  55.5,  349, 'no'],
        ['Aug-01',  54.7,  396, 'no'],
        ['Jul-01',  53.9,  409, 'no'],
        ['Jun-01',  53.1,  314, 'no'],
        ['May-01',  52.3,  255, 'yes'],
        ['Apr-01',  51.5,  234, 'yes'],
        ['Mar-01',  50.7,  291, 'no'],
        ['Feb-01',  49.9,  233, 'yes'],
        ['Jan-01',  49.1,  282, 'yes'],
        ['Dec-00',  48.6,  233, 'yes'],
        ['Nov-00',  48.1,  232, 'yes'],
        ['Oct-00',  47.6,  329, 'no'],
        ['Sep-00',  47.1,  298, 'no'],
        ['Aug-00',  46.6,  297, 'no'],
        ['Jul-00',  46.1,  364, 'no'],
        ['Jun-00',  45.6,  276, 'no'],
        ['May-00',  45.1,  188, 'yes'],
        ['Apr-00',  44.6,  197, 'yes'],
        ['Mar-00',  44.1,  225, 'yes'],
        ['Feb-00',  43.6,  203, 'yes'],
        ['Jan-00',  43.1,  231, 'yes'],
        ['Dec-99',  42.25,  226, 'yes'],
        ['Nov-99',  41.5,  450, 'yes'],
        ['Oct-99',  40.75,  312, 'no'],
        ['Sep-99',  40.0,  404, 'no'],
        ['Aug-99',  39.25,  318, 'no'],
        ['Jul-99',  38.5,  307, 'no'],
        ['Jun-99',  37.75,  286, 'no'],
        ['May-99',  37.0,  190, 'yes'],
        ['Apr-99',  36.25,  165, 'yes'],
        ['Mar-99',  35.5,  162, 'yes'],
        ['Feb-99',  34.75,  175, 'yes'],
        ['Jan-99',  34.0,  145, 'yes'],
        ['Dec-98',  33.31,  193, 'yes'],
        ['Nov-98',  32.7,  213, 'yes'],
        ['Oct-98',  32.09,  226, 'no'],
        ['Sep-98',  31.48,  248, 'no'],
        ['Aug-98',  30.87,  176, 'no'],
        ['Jul-98',  30.26,  185, 'no'],
        ['Jun-98',  29.65,  212, 'no'],
        ['May-98',  29.04,  106, 'yes'],
        ['Apr-98',  28.43,  130, 'yes'],
        ['Mar-98',  27.82,  146, 'yes'],
        ['Feb-98',  27.21,  87,  'yes'],
        ['Jan-98',  26.6,  85,  'yes'],
        ['Dec-97',  25.81,  73,  'yes'],
        ['Nov-97',  25.1,  124, 'yes'],
        ['Oct-97',  24.39,  114, 'no'],
        ['Sep-97',  23.68,  57,  'no'],
        ['Aug-97',  22.97,  131, 'no'],
        ['Jul-97',  22.26,  228, 'no'],
        ['Jun-97',  21.55,  198, 'no'],
        ['May-97',  20.84,  107, 'yes'],
        ['Apr-97',  20.13,  95,  'yes'],
        ['Mar-97',  19.42,  198, 'yes'],
        ['Feb-97',  18.71,  48,  'yes'],
        ['Jan-97'  ,18.0,   56,  'yes'],
        ['Dec-96'  ,17.44,   85,  'yes'],
        ['Nov-96'  ,16.9,   87,  'yes'],
        ['Oct-96'  ,16.36,   55,  'yes'],
        ['Sep-96'  ,15.82,   73,  'no'],
        ['Aug-96'  ,15.28,   85,  'no'],
        ['Jul-96'  ,14.74,   79,  'no'],
        ['Jun-96'  ,14.2,   153, 'no'],
        ['May-96'  ,13.66,   81,  'yes'],
        ['Apr-96'  ,13.12,   103, 'yes'],
        ['Mar-96'  ,12.58,   66,  'yes'],
        ['Feb-96'  ,12.04,   76,  'yes'],
        ['Jan-96'  ,11.5,   59,  'yes'],
        ['Dec-95'  ,10.92,   59,  'yes'],
        ['Nov-95'  ,10.4 ,  121, 'yes'],
        ['Oct-95',  9.88, 109, 'yes'],
        ['Sep-95',  9.36, 131, 'yes'],
        ['Aug-95',  8.84, 195, 'no'],
        ['Jul-95',  8.32, 134, 'no'],
        ['Jun-95',  7.80, 182, 'no'],
        ['May-95',  7.28, 104, 'yes'],
        ['Apr-95',  6.76, 92 , 'yes'],
        ['Mar-95',  6.24, 124, 'yes'],
        ['Feb-95',  5.72, 116, 'yes'],
        ['Jan-95',  5.2, 95 , 'yes'],
        ['Dec-94',  4.83, 39 , 'yes'],
        ['Nov-94',  4.62, 25 , 'yes'],
        ['Oct-94',  4.41, 65 , 'yes'],
        ['Sep-94',  4.20, 36 , 'yes'],
        ['Aug-94',  3.99, 63 , 'no'],
        ['Jul-94',  3.78, 58,  'no'],
        ['Jun-94',  3.57, 86,  'no'],
        ['May-94',  3.36, 33,  'yes'],
        ['Apr-94',  3.15, 30,  'yes'],
        ['Mar-94',  2.94, 23,  'yes'],
        ['Feb-94',  2.73, 11,  'yes'],
        ['Jan-94',  2.52, 19,  'yes'],
        ['Dec-93',  2.31, 16,  'yes'],
        ['Nov-93',  2.1, 20,  'yes'],
        ['Oct-93',  1.89, 23,  'yes'],
        ['Sep-93',  1.68, 28,  'yes']
      ]);

      var options = {
        title: 'Correlation between internet access, ufo sightings ' +
               'and the broadcast of new X-Files episodes',
        titleTextStyle: {fontSize: 20},
        backgroundColor: { stroke: 'khaki', rx: 10, ry: 10, strokeWidth: 10, fill: 'AliceBlue' },
        hAxis: {title: 'Internet Access (% of US Households)'},
        series: {'yes': {color: 'green'},
                  'no': {color: 'red'}},
        sizeAxis: {maxSize: 10},
        vAxis: {title: 'UFO Sightings Reported'},
        bubble: {textStyle: {
                  fontSize: 1,
                  opacity:.1},
                  opacity: 0.6}
      };

      chart = new google.visualization.BubbleChart(document.getElementById('chart'));
      chart.draw(data, options);
    }