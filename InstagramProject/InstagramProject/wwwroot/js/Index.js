var span = document.createElement("span");
span.innerHTML = "My Gram ";

var div = document.getElementById("MyInstagramContainer");

div.appendChild(span);

var loginButton = document.createElement("button");
loginButton.innerHTML = "Log in";

div.appendChild(loginButton);

var a = document.createElement("a");
a.setAttribute("href", "Home/Registration");
var signUpButton = document.createElement("button");
signUpButton.innerHTML = "Sign up";

a.appendChild(signUpButton);

div.appendChild(a);

var lineBreak = document.createElement("br");

div.appendChild(lineBreak);


var table = document.createElement("table");
var tbody = document.createElement("tbody");
var trow = document.createElement("tr");
var td = null;
var imageSpan = null;
var counter = 0;





    



var lineBreak2 = document.createElement("br");

div.appendChild(lineBreak2);

"use strict";

//var product = new Image("Product", "Description", "Image", 25);

var imageList = [];
var image = new Image();

for (var i = 0; i < 25; i++) {
    image = new Image();
    image.imageName = "Image " + (i + 1);
    image.imageId = (i + 1);
    image.imagePath = "Any path";

    imageList.push(image);
}


for (var i = 0; i < 25; i++) {
    image = imageList[i];
    if (counter == 5) {
        tbody.appendChild(trow);
        trow = document.createElement("tr");
        counter = 0;
    }


    td = document.createElement("td");
    imageSpan = document.createElement("span");
    imageSpan.innerHTML = image.imageName;

    td.appendChild(imageSpan);
    trow.appendChild(td);
    counter++;
}

tbody.appendChild(trow);
table.appendChild(tbody);
div.appendChild(table);



var image = new Object(); {
//    imageName: "This", imageDescription: "Image", imagePrice: 30
};


var imageArray = document.getElementsByClassName("CustomImages");
for (var x = 0; x < imageArray.length; x++) {
    imageArray[x].onclick = function () {
        alert("I am an image");
    }
}



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