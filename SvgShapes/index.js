//  // javascript

 var svgWidth = 600, svgHeight = 500;
 var svg = d3.select("svg")
     .attr("width", svgWidth)
     .attr("height", svgHeight)
     .attr("class", "svg-container");

     var data = [
        {date: new Date(2007, 3, 24), value: 93.24},
        {date: new Date(2007, 3, 25), value: 95.35},
        {date: new Date(2007, 3, 26), value: 98.84},
        {date: new Date(2007, 3, 27), value: 99.92},
        {date: new Date(2007, 3, 30), value: 99.80},
        {date: new Date(2007, 4,  1), value: 99.47}
      ];

      var line = d3.line()
      .x(function(d) { return x(d.date); })
      .y(function(d) { return y(d.value); });
      
     
//  var line = svg.append("line")
//      .attr("x1", 100)
//      .attr("x2", 500)
//      .attr("y1", 50)
//      .attr("y2", 50)
//      .attr("stroke", "red")
//      .attr("stroke-width", 5);
     
//  var rect = svg.append("rect")
//      .attr("x", 100)
//      .attr("y", 100)
//      .attr("width", 200)
//      .attr("height", 100)
//      .attr("fill", "#9B95FF");
     
//  var circle = svg.append("circle")
//      .attr("cx", 200)
//      .attr("cy", 300)
//      .attr("r", 80)
//      .attr("fill", "#7CE8D5"); 
 