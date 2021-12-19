function Check(ob)
{
    if(document.getElementsByClassName(ob).value!='')
        return true;
}
function chart()
{
    var xValues = ["15", "16", "17", "18", "19","20"];
        var yValues = [40, 31, 44, 24, 30,36];
        var barColors = ["red", "orange","yellow","green","blue","aqua"];
        
        new Chart("myChart", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: barColors,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Doanh thu 6 ngày vừa qua",
            },
            scales: {
              yAxes: [{ticks: {min: 0, max:70}}],
            }
          }
        });
} 