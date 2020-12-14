// from data.js
var tableData = data;

// YOUR CODE HERE!
var datetime = data.datetime;

var tableBody = d3.select("tbody");
var filter = d3.select("#filters");
var button = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];

var addTableData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = tableBody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addTableData(tableData);

button.on("click", runEnter);

function runEnter() {
    d3.event.preventDefault();

    var inputValue = inputDate.property("value");
    console.log(inputValue);

    var filterDate = tableData.filter(date => date.datetime === inputValue);
    console.log(filterDate);

    tableBody.html("");

    let response = {
        filterDate
    }

    if(response.filterDate.length !==0) {
        addTableData(filterDate);
    }
    else
    {
        tableBody.append("tr").append("td").text("There were no UFO sighting recorded on this date.")
    }
}