var table = document.createElement("table");
var thead = document.createElement("thead");

var tr = document.createElement("tr");
var th = document.createElement("th");
var h3 = document.createElement("h3");
h3.innerHTML = "User Personal Information";

th.appendChild(h3);
tr.appendChild(th);
thead.appendChild(tr);
table.appendChild(thead);
var tbody = document.createElement("tbody");
var tr = document.createElement("tr");
var td = document.createElement("td");
td.innerHTML = "First Name: ";
tr.appendChild(td);
var td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add Your First Name: ");

td.appendChild(input);
tr.appendChild(td);
var td = document.createElement("td");
td.innerHTML = "Last Name: ";
tr.appendChild(td);
var td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add Your Last Name: ");
td.appendChild(input);
tr.appendChild(td);
tbody.appendChild(tr);
var tr = document.createElement("tr");
var td = document.createElement("td");
td.innerHTML = "Gender: ";

tr.appendChild(td);

var td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "radio");

td.appendChild(input);


var span = document.createElement("span");
span.innerHTML = "Male";
td.appendChild(span);
tr.appendChild(td);

td.appendChild(input);

var td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "radio");

td.appendChild(input);


var span = document.createElement("span");
span.innerHTML = "Female";
td.appendChild(span);
tr.appendChild(td);

td.appendChild(input);

var td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "radio");

td.appendChild(input);


var span = document.createElement("span");
span.innerHTML = "Prefer not to respond";
td.appendChild(span);
tr.appendChild(td);

td.appendChild(input);



tr.appendChild(td);
tbody.appendChild(tr);
var tr = document.createElement("tr");
var td = document.createElement("td");



td.innerHTML = "Email Address: ";
tr.appendChild(td);
var td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add your Email Address: ");

td.appendChild(input);
tr.appendChild(td);

tr.appendChild(td);
tbody.appendChild(tr);
var tr = document.createElement("tr");
var td = document.createElement("td");

td.innerHTML = "Country of Residence: ";
tr.appendChild(td);
var td = document.createElement("td");
var select = document.createElement("select");
select.setAttribute("id", "Country");
var option = document.createElement("option");
option.innerHTML = "USA";
select.appendChild(option);
var option = document.createElement("option");
option.innerHTML = "Mexico";
select.appendChild(option);


td.appendChild(select);
tr.appendChild(td);


tr.appendChild(td);
tbody.appendChild(tr);
var tr = document.createElement("tr");
var td = document.createElement("td");



var input = document.createElement("button");
input.innerHTML = "Update User Information";
tr.appendChild(td);





;
td.appendChild(input);
tr.appendChild(td);
tbody.appendChild(tr);
table.appendChild(tbody);
var div = document.getElementById("MyInstagramContainer");
div.appendChild(table);



td.appendChild(input);


button.onclick = function () {
    alert("I am doing something second");
};