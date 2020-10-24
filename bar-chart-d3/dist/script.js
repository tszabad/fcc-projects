function drawBar(dataSet) {
  var datadate = dataSet.map(x => x[0]);
  var datagdp = dataSet.map(x => x[1]);

  var margin = { top: 20, right: 20, bottom: 50, left: 60 },
    height = 400,
    width = 800;

  var minDate = datadate[0].substr(0, 4);
  minDate = new Date(minDate);

  var maxDate = dataSet[datadate.length - 1][0].substr(0, 4);
  maxDate = new Date(maxDate);

  var xAxisScale = d3.time
    .scale()
    .domain([minDate, maxDate])
    .range([0, width]);

  var yAxisScale = d3.scale
    .linear()
    .domain([0, d3.max(datagdp)])
    .range([height, 0]);

  var xAxis = d3.svg
    .axis()
    .scale(xAxisScale)
    .orient("buttom");
  var yAxis = d3.svg
    .axis()
    .scale(yAxisScale)
    .orient("left");

  var tooltip = d3
    .select("body")
    .append("div")
    .attr("id", "tooltip")
     .style({
        'position' : 'absolute',
        'padding' : '4px',
        'background' : '#fff',
        'border': '1px solid #000',
        'color':'#000'
        });
  
  function mouseoverHandler(d, i) {
   tooltip.transition().style('opacity', .8)
   tooltip.style({
            'left' : (d3.event.pageX + 10) + 'px',
            'top' : (d3.event.pageY + 15) + 'px'
            })
          .html('<p> Date: ' + datadate[i] + '</p>'
                  + '<p> Billions: ' + datagdp[i] + '</p>')
          .attr('data-date', datadate[i])
    
   d3.select(this)
      .style('opacity', .1);
}
function mouseoutHandler(d) {
    tooltip.transition().style('opacity', 0)  
    d3.select(this)
      .style('opacity', 1);
}
function mouseMoving (d) {
    tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
    d3.select(this)
      .style('opacity', 0.8);
}

  var svg = d3
    .select(".visHolder")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr("class", "graph-svg-component")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg
    .selectAll("bar")
    .data(dataSet)
    
    .enter()
    .append("rect")

    .attr("data-date", function(d, i) {
      return datadate[i];
    })
    .attr("data-gdp", function(d, i) {
      return datagdp[i];
    })
   
    
    .attr("class", "bar")
    .style("fill", "blue")
  
    .attr({
      x: function(d, i) {
        return i * (width / datagdp.length);
        
      },
      y: function(d) {
        return yAxisScale(d[1]);
      },
      width: width / datadate.length,
      height: function(d) {
        return height - yAxisScale(d[1]);
      }
    })
 
   .on('mouseover', mouseoverHandler)
   .on("mousemove",mouseMoving)
   .on("mouseout", mouseoutHandler);

  svg
    .append("g")
    .attr("class", "x axis")
    .attr("id", "x-axis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "end")
    .attr("dx", "+1em")
    .attr("dy", "+.55em")
    .attr("y", 30)
    .attr("transform", "rotate(0)")
    .append("text")
  .call(xAxis)
  .style("text-anchor", "end")
  .attr("y", 50)
    .text("Year");

  svg
    .append("g")
    .attr("class", "y axis")
    .attr("id", "y-axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
   .attr("y", -60)
            .attr("dy", "0.8em")
            .attr("text-anchor", "end")
            .text("Value (billions)");
}

d3.json(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json",
  function(error, data) {
    var dataSet = data.data;
    drawBar(dataSet);
  }
);