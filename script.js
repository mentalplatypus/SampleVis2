google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Opinion', 'Percentage'],
          ['Mostly positive',     12],
          ['A mix of both',      66],
          ['Mostly negative',  22]
        ]);

        var options = {
          title: 'Among those previously polled, percentage saying what they have seen or heard is ___ '
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }