/*!
* Start Bootstrap - One Page Wonder v6.0.5 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

$("#btnSend").click(function () {
    //Calculate grade based on percentages
    let grade = ($('#assign').val() * .50) + ($('#project').val() * .10) + ($('#quiz').val() * .10) + ($('#midterm').val() * .10) + ($('#final').val() * .10) + ($('#intex').val() * .10);

    //Initialize grade code
    var code = "A";

    //Calculate grade code
    if (grade >= 94) {
        code = "A";
    }
    else if (grade >= 90) {
        code = "A-";
    }
    else if (grade >= 87) {
        code = "B+";
    }
    else if (grade >= 84) {
        code = "B";
    }
    else if (grade >= 80) {
        code = "B-";
    }
    else if (grade >= 77) {
        code = "C+";
    }
    else if (grade >= 74) {
        code = "C";
    }
    else if (grade >= 70) {
        code = "C-";
    }
    else if (grade >= 67) {
        code = "D+";
    }
    else if (grade >= 64) {
        code = "D";
    }
    else if (grade >= 60) {
        code = "D-";
    }
    else {
        code = "E";
    }
    //Display grade code and percentage
    $('#finalGrade1').html("Grade: " + code);
    $('#finalGrade2').html("Percentage: " + grade + "%");
})