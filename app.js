
'use strict';

var myapp = angular.module('myapp', ["highcharts-ng"]);

myapp.controller('myctrl', function ($scope) {
    
    $scope.addPoints = function () {
        var seriesArray = $scope.chartConfig.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
    };
    
    $scope.addSeries = function () {
        var rnd = []
        for (var i = 0; i < 10; i++) {
            rnd.push(Math.floor(Math.random() * 20) + 1)
        }
        $scope.chartConfig.series.push({
            data: rnd
        })
    }

    $scope.chartConfig = {
          
          title: {
              text: 'Stacked column chart'
          },
          xAxis: {
              categories: []
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Total Daily Visitors'
              },
              stackLabels: {
                  enabled: true,
                  style: {
                      fontWeight: 'bold',
                      color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                  }
              }
          },
          options: {
            chart: {
              type: 'column'
          },
            legend: {
              align: 'right',
              x: -70,
              verticalAlign: 'top',
              y: 20,
              floating: true,
              backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
              borderColor: '#CCC',
              borderWidth: 1,
              shadow: false
          },
          tooltip: {
              formatter: function() {
                  return '<b>'+ this.x +'</b><br/>'+
                      this.series.name +': '+ this.y +'<br/>'+
                      'Total: '+ this.point.stackTotal;
              }
          },
          plotOptions: {
              column: {
                  stacking: 'normal',
                  dataLabels: {
                      enabled: true,
                      color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                      style: {
                          textShadow: '0 0 3px black, 0 0 3px black'
                      }
                  }
              }
          }},
          series: [{
              name: 'Repeat Visitors',
              data: []
          }, {
              name: 'New Visitors',
              data: []
          }, {
              name: 'Total Visitors',
              data: []
          },{
              type: 'spline',
              name: 'Relative Change',
              data: []
          }]
      };
      
      var mapJSON = function () {
        var visitors = [
                        {
                            "day": "2015-06-13 21:53:21.812374",
                            "total_visitors": 1200,
                            "new_visitors": 1100,
                            "repeat_visitors": 100
                        },
                        {
                            "day": "2015-06-14 21:35:47.484132",
                            "total_visitors": 1440,
                            "new_visitors": 1390,
                            "repeat_visitors": 50
                        },
                        {
                            "day": "2015-06-15 21:16:17.112171",
                            "total_visitors": 1220,
                            "new_visitors": 1200,
                            "repeat_visitors": 20
                        },
                        {
                            "day": "2015-06-16 21:04:07.182102",
                            "total_visitors": 1300,
                            "new_visitors": 1190,
                            "repeat_visitors": 110
                        },
                        {
                            "day": "2015-06-17 21:26:27.822172",
                            "total_visitors": 1530,
                            "new_visitors": 1100,
                            "repeat_visitors": 430
                        },
                        {
                            "day": "2015-06-18 21:56:47.882172",
                            "total_visitors": 1605,
                            "new_visitors": 1405,
                            "repeat_visitors": 200
                        },
                        {
                            "day": "2015-06-19 21:50:40.002172",
                            "total_visitors": 1000,
                            "new_visitors": 905,
                            "repeat_visitors": 95
                        },
                        {
                            "day": "2015-06-20 21:53:21.812374",
                            "total_visitors": 1600,
                            "new_visitors": 1400,
                            "repeat_visitors": 200
                        },
                        {
                            "day": "2015-06-21 21:35:47.484132",
                            "total_visitors": 1660,
                            "new_visitors": 1350,
                            "repeat_visitors": 310
                        },
                        {
                            "day": "2015-06-22 21:16:17.112171",
                            "total_visitors": 1630,
                            "new_visitors": 1200,
                            "repeat_visitors": 430
                        },
                        {
                            "day": "2015-06-23 21:04:07.182102",
                            "total_visitors": 1590,
                            "new_visitors": 1500,
                            "repeat_visitors": 90
                        },
                        {
                            "day": "2015-06-24 21:26:27.822172",
                            "total_visitors": 1700,
                            "new_visitors": 1100,
                            "repeat_visitors": 600
                        },
                        {
                            "day": "2015-06-25 21:56:47.882172",
                            "total_visitors": 1705,
                            "new_visitors": 1505,
                            "repeat_visitors": 200
                        },
                        {
                            "day": "2015-06-26 21:50:40.002172",
                            "total_visitors": 1705,
                            "new_visitors": 1555,
                            "repeat_visitors": 150
                        }
                 ];
                 
                 for ( var x in visitors){
                     var date = visitors[x].day;
                     $scope.chartConfig.xAxis.categories.push(date);
                     $scope.chartConfig.series[0].data.push(visitors[x].repeat_visitors);
                     $scope.chartConfig.series[1].data.push(visitors[x].new_visitors);
                     $scope.chartConfig.series[2].data.push(visitors[x].total_visitors);
                     $scope.chartConfig.series[3].data.push(visitors[x].total_visitors);
                 }
                    
    }
    
    mapJSON();
});