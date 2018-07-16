//SPA (single page app)
function openPage(pageName, elmnt, color) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
        tablinks[i].style.color = 'white';
    }

    document.getElementById(pageName).style.display = "block";

    elmnt.style.backgroundColor = color;
    elmnt.style.color = 'rgb(21, 55, 112)';
}

document.getElementById("defaultOpen").click();


//Angular Controller
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
});
