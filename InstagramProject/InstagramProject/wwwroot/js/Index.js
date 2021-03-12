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

var lineBreak = document.createElement("br");

div.appendChild(lineBreak);

var table = document.createElement("table");
var tbody = document.createElement("tbody");
var trow = document.createElement("tr");
var td = null;
var imageSpan = null;
var counter = 0;



for (var i = 1; i <= 25; i++) {
    if (counter == 5) {
        tbody.appendChild(trow);
        trow = document.createElement("tr");
        counter = 0;
    }

    
    td = document.createElement("td");
    imageSpan = document.createElement("span");
    imageSpan.innerHTML = "Image " + i;

    td.appendChild(imageSpan);
    trow.appendChild(td);
    counter++;
}

tbody.appendChild(trow);
table.appendChild(tbody);
div.appendChild(table);


    



var lineBreak2 = document.createElement("br");

div.appendChild(lineBreak2);

"use strict";

//var product = new Product("Product", "Description", "Image", 25);

//var product1 = new Product("Product 1", "Description 1", "Image 1", 5);
//var product2 = new Product("Product 2", "Description 2", "Image 2", 10);
//var product3 = new Product("Product 3", "Description 3", "Image 3", 15);
//var product4 = new Product("Product 4", "Description 4", "Image 4", 20);
//var product5 = new Product("Product 5", "Description 5", "Image 5", 25);
//var product6 = new Product("Product 6", "Description 6", "Image 6", 30);
//var product7 = new Product("Product 7", "Description 7", "Image 7", 35);
//var product8 = new Product("Product 8", "Description 8", "Image 8", 40);
//var product9 = new Product("Product 9", "Description 9", "Image 9", 45);
//var product10 = new Product("Product 10", "Description 10", "Image 10", 50);
//var product11 = new Product("Product 11", "Description 11", "Image 11", 55);
//var product12 = new Product("Product 12", "Description 12", "Image 12", 60);
//var product13 = new Product("Product 13", "Description 13", "Image 13", 65);
//var product14 = new Product("Product 14", "Description 14", "Image 14", 70);
//var product15 = new Product("Product 15", "Description 15", "Image 15", 75);

//var cart = [];
//cart.push(product1);
//cart.push(product2);
//cart.push(product3);
//cart.push(product4);
//cart.push(product5);
//cart.push(product6);
//cart.push(product7);
//cart.push(product9);
//cart.push(product10);
//cart.push(product11);
//cart.push(product12);
//cart.push(product13);
//cart.push(product14);
//cart.push(product15);




 


//var image = new Object(); {
////    imageName: "This", imageDescription: "Image", imagePrice: 30
//};


//var imageArray = document.getElementsByClassName("CustomImages");
//for (var x = 0; x < imageArray.length; x++) {
//    imageArray[x].onclick = function () {
//        alert("I am an image");
//    }
//}



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