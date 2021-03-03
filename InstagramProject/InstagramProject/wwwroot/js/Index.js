var span = document.createElement("span");
span.innerHTML = "My Gram ";

var div = document.getElementById("MyInstagramContainer");

div.appendChild(span);

var loginButton = document.createElement("button");
loginButton.innerHTML = "Log in";

div.appendChild(loginButton);

var signUpButton = document.createElement("button");
signUpButton.innerHTML = "Sign in";

div.appendChild(signUpButton);

var lineBreak = document.createElement("br")

div.appendChild(lineBreak);

var table = document.createElement("table");

var tBody = document.createElement("tbody");
tBody.setAttribute("id", "ImagesBody");

table.appendChild(tBody);
div.appendChild(table);


var tr = document.createElement("tr");
var counter = 0;
var td = null;
var span = null;


for (var i = 1; i <= 25; i++) {
    if (counter == 5) {
        counter = 0;
        tr = document.createElement("tr");
    }
    
    td = document.createElement("td");
    span = document.createElement("span");
    span.innerHTML = "Image " + i;
    td.appendChild(span);
    tr.appendChild(td);

    tBody.appendChild(tr);
    counter++;
}


var lineBreak2 = document.createElement("br")

div.appendChild(lineBreak2);

var aboutSpan = document.createElement("span");
aboutSpan.innerHTML = "About ";

div.appendChild(aboutSpan);

var blogSpan = document.createElement("span");
blogSpan.innerHTML = "Blog ";

div.appendChild(blogSpan);

var jobsSpan = document.createElement("span");
jobsSpan.innerHTML = "Jobs ";

div.appendChild(jobsSpan);

var helpSpan = document.createElement("span");
helpSpan.innerHTML = "Help ";

div.appendChild(helpSpan);

var lineBreak3 = document.createElement("br")

div.appendChild(lineBreak3);

var englishSpan = document.createElement("span");
englishSpan.innerHTML = "English ";

div.appendChild(englishSpan);

var yearSpan = document.createElement("span");
yearSpan.innerHTML = "2021 ";

div.appendChild(yearSpan);

var myGramSpan = document.createElement("span");
myGramSpan.innerHTML = "My Gram ";

div.appendChild(myGramSpan);