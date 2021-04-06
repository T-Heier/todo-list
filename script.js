$(document).ready(function () {

    

    // This function currently checks to see if the save button works, will hopefully save the text area once its done.
$('.saveBtn').on('click', function () {
    console.log("buttonclick");
    var textInput = $(this).siblings('.input').val();
    var textHour = $(this).parent().attr('id');
    localStorage.setItem(textHour, textInput);
})


// Add moment timer here
var currentTime = moment().format("dddd MMM Do, YYYY");
$('#currentDay').text(currentTime);
var hourCheck = moment().format("H");

// get id from each row
const rows = document.getElementsByClassName("row")

// Background color with passing time function here, .each
function hourChecker() {
    var whatHour = parseInt(hourCheck);
    console.log(whatHour)

    $(rows).each(function (index) {
        if (rows[index].id == whatHour) {
            $("textarea").addClass('present')
        }   else if (whatHour < rows[index].id) {
            $("textarea").addClass('future')
        }   else {
            $("textarea").addClass('past')
        }
        // console.log( index + ": " + $( this ).text() );
      });
}
hourChecker()

// render local storage to page
function localStorageReturn() {
    for (var key in localStorage){

       var hourKey = document.getElementById(key.toString());
       var child = hourKey.childNodes[3];
       console.log(child)
       child.innerText = localStorage.getItem(key);
    }
}

localStorageReturn();

})

