var tableData = data;
var filtButton = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var inputTbody = d3.select("tbody"); 
var inputState = d3.select("#state");
var inputCountry = d3.select("#country")
var inputShape   = d3.select("#shape")

var defDate = '1/1/2010';
var loadFiltData = "n";
var dateInput ;

function loadTableData(dataArray) {
d3.select("tbody")
  .selectAll("tr")
  .data(dataArray)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.datetime}</td> <td>${d.city}</td> <td>${d.state}</td> <td>${d.country}</td>
            <td>${d.shape}</td> <td>${d.durationMinutes}</td> <td>${d.comments}</td>     `;
  });
}

if (loadFiltData == 'y') {
  console.log("in filt data y")
  finalData = filtData;
  }
else {
  console.log("in filt data n")
  finalData = tableData;
  }
console.log("First time main logic")
console.log(finalData)
inputTbody.html("");
loadTableData(finalData)
filtButton.on("click", function() {

 d3.event.preventDefault();

 var dateValue = inputDate.property("value");
 var stateValue = inputState.property("value");

 console.log(" in filtbutton.on code ")
 console.log("dateValue  " + dateValue);
 console.log("stateValue " + stateValue);
 console.log(" after getting date/state value")
 var filtData = tableData.filter(fData => (fData.datetime == dateValue) && (fData.state == stateValue) ) ;
 console.log(filtData) 
 loadFiltData = "y";
 if (loadFiltData == 'y') {
  console.log("in filt data y")
  finalData = filtData;
  }
else {
  console.log("in filt data n")
  finalData = tableData;
  }
console.log(finalData)
inputTbody.html("");
loadTableData(finalData)
});
