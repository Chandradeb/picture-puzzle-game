/*jslint browser: true*/
/*global $, jQuery, alert*/
/* eslint-env browser */
var imageArray = [
    "i1.jpg",
    "i2.jpg",
    "i3.jpg",
    "i4.jpg",
    "i5.jpg",
    "i6.jpg",
    "i7.jpg",
    "i8.jpg",
    "i9.jpg"
];

var checkboxArray = [];
var checkInd = 0;
var ind;
var temp, temp1, temp2, temp3, temp4, temp5, temp6, imgTemp1, imgTemp2;
var i;
var img1, img2, img3, img4, img5, img6, img7, img8, img9;
//var c1, c2, c3, c4, c5, c6, c7, c8, c9;
var check;
var turnMsg,turnCnt = 0;
var win;

$(document).ready(function () {
    img1 = document.getElementById("i1");
    img2 = document.getElementById("i2");
    img3 = document.getElementById("i3");
    img4 = document.getElementById("i4");
    img5 = document.getElementById("i5");
    img6 = document.getElementById("i6");
    img7 = document.getElementById("i7");
    img8 = document.getElementById("i8");
    img9 = document.getElementById("i9");
    turnMsg = document.getElementById("turn");
    win = document.getElementById("win");
    
    
    
    assignImage();
    
    $("#swapButton").click(function(){
        if(checkboxArray.length !== 2){
            return;
        }
        turnCnt++;
        turnMsg.innerHTML = "Turn: " + turnCnt;
        temp1 = checkboxArray[0];
        temp2 = checkboxArray[1];
        document.getElementById(temp1).checked = false;
        document.getElementById(temp2).checked = false;
        checkboxArray.pop();
        checkboxArray.pop();
        checkInd = 0;
        temp3 = 'i' + temp1;
        temp4 = 'i' + temp2;
        imgTemp1 = document.getElementById(temp3);
        imgTemp2 = document.getElementById(temp4);
        temp5 = parseInt(temp1);
        temp6 = parseInt(temp2);
        temp5 -=1;
        temp6 -=1;
        imgTemp1.src = imageArray[temp6];
        imgTemp2.src = imageArray[temp5];
        temp = imageArray[temp6];
        imageArray[temp6] = imageArray[temp5];
        imageArray[temp5] = temp;
        checkAns();
    });
    
});

function gotChecked (id){
    if(checkboxArray[0] == id){
        if(checkboxArray.length === 2)
            checkInd = 1;
        else
            checkInd = 0;
        checkboxArray.shift();
        return;
    }
    if(checkboxArray[1] == id){
        checkInd = 1;
        checkboxArray.pop();
        return;
    }
    checkInd %= 2;
    if(checkboxArray.length === 2){
        check = document.getElementById(checkboxArray[checkInd]);
        check.checked = false;
    }
    checkboxArray[checkInd] = id;
    checkInd++;
}

function assignImage() {
    for (i = imageArray.length - 1; i > 0; i--) {
        ind = Math.floor(Math.random() * i);
        temp = imageArray[i];
        imageArray[i] = imageArray[ind];
        imageArray[ind] = temp;
    }
    
    img1.src = imageArray[0];
    img2.src = imageArray[1];
    img3.src = imageArray[2];
    img4.src = imageArray[3];
    img5.src = imageArray[4];
    img6.src = imageArray[5];
    img7.src = imageArray[6];
    img8.src = imageArray[7];
    img9.src = imageArray[8];
    turnCnt = 0;
    turnMsg.innerHTML = "Turn: " + turnCnt;
}

function checkAns(){
    if(imageArray[0] == "i1.jpg" && imageArray[1] == "i2.jpg" && imageArray[2] == "i3.jpg" && imageArray[3] == "i4.jpg" && imageArray[4] == "i5.jpg" && imageArray[5] == "i6.jpg" && imageArray[6] == "i7.jpg" && imageArray[7] == "i8.jpg" && imageArray[8] == "i9.jpg"){
        turnMsg.innerHTML = "Congratulations!!! You cracked the puzzle in " + turnCnt + " turns. Take a look at your achievement for 10 seconds before it disappears.";
        document.getElementById("swapButton").disabled = true;
        setTimeout(function(){document.getElementById("swapButton").disabled = false;},10000);
        setTimeout(function(){assignImage();}, 11000);
    }
}
