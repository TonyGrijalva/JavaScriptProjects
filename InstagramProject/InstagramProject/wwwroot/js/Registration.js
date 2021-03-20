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
input.setAttribute("ID", "FirstName");

td.appendChild(input);
tr.appendChild(td);
var td = document.createElement("td");
td.innerHTML = "Last Name: ";
tr.appendChild(td);
var td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add Your Last Name: ");
input.setAttribute("ID", "LastName");

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
input.setAttribute("ID", "Gender");


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
input.setAttribute("ID", "EmailAddress");


td.appendChild(input);
tr.appendChild(td);

tr.appendChild(td);
tbody.appendChild(tr);
var tr = document.createElement("tr");
var td = document.createElement("td");

td.innerHTML = "CountryOfResidence: ";
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



var form = document.getElementById("MainForm");
form.onsubmit = function (event) {
    event.preventDefault();

}


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


//button.onclick = function () {
//    alert("I am doing something second");
//};

var FirstNameInput = document.getElementById("FirstName");
var LastNameInput = document.getElementById("LastName");
var GenderInput = document.getElementById("Gender");
var EmailAddressInput = document.getElementById("EmailAddress");
var CountryOfResidenceInput = document.getElementById("CountryOfResidennce");
var User = new User();
User.firstName = FirstNameInput.value;
User.lastName = LastNameInput.value;
User.gender = GenderInput.value;
User.emailAddress = EmailAddressInput.value;
//User.countryOfResidence = CountryOfResidenceInput.value;


td = document.createElement("td");
button = document.createElement("button");
button.innerHTML = "Add User";
button.className = "AddUser";
button.setAttribute("data-actual-user", JSON.stringify(User));
td.appendChild(button);
tr.appendChild(td);

tbody.appendChild(tr);


var buttonList = document.getElementsByClassName("AddUser");
for (var x = 0; x < buttonList.length; x++) {
    buttonList[x].onclick = function () {
        var product = this.getAttribute("data-actual-user");

        fetch("/Home/SaveUser", {
            method: "POST",
            cache: "no-cache",
            headers: {
                'Content-Type': "application/json; charset=UTF-8"
            },
            body: JSON.stringify(User)
        }).then(response => response.json())
            .then(data => {
                if (data == true) {
                    alert("User was saved");
                }
            });
    };
}