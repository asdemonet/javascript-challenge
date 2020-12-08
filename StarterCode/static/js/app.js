// from data.js
var tableData = data;

// YOUR CODE HERE!
var datetime = data.datetime;


var filter = d3.select("#filters");
var button = d3.select("#filter-btn");

button.on("click", runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(date => date.datetime === inputValue);
    console.log(filteredData);
}