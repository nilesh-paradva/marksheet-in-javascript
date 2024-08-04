var printbtn = document.getElementById("print");
printbtn.addEventListener('click', function () {
    print();
});

// Collect student information
const st_name = getInput("Enter your Student Name:- ");
const std = getInput("Enter your Std:- ");
const division = getInput("Enter your Division:- ");
const gr_no = parseInt(getInput("Enter your Gr No:- "));
const roll = parseInt(getInput("Enter your Roll No:- "));
const year = parseInt(getInput("Enter your Year:- "));
const sect = getInput("Enter your Section:- ");
const birth = getInput("Enter your Birth Date:- ");

// Display student information
document.getElementById('std').innerHTML = std;
document.getElementById('stu-name').innerHTML = st_name;
document.getElementById("divi").innerHTML = division;
document.getElementById("grno").innerHTML = gr_no;
document.getElementById("rollno").innerHTML = roll;
document.getElementById("year").innerHTML = year;
document.getElementById("section").innerHTML = sect;
document.getElementById("bi-date").innerHTML = birth;

// Function to get input values
function getInput(promptText) {
    return prompt(promptText);
}

// Collect marks
const en = parseInt(getInput("Enter your English marks:-"));
const ch = parseInt(getInput("Enter your Chemistry marks:-"));
const ph = parseInt(getInput("Enter your Physics marks:-"));
const bi = parseInt(getInput("Enter your Biology marks:-"));
const co = parseInt(getInput("Enter your Computer marks:-"));

// Show marks
document.getElementById('en').innerHTML = en;
document.getElementById('ch').innerHTML = ch;
document.getElementById('ph').innerHTML = ph;
document.getElementById('bi').innerHTML = bi;
document.getElementById('co').innerHTML = co;

// Calculate and display total and percentage
const ob_mark = en + ch + ph + bi + co;
const percentage = ob_mark / 5;
document.getElementById("ob-mark").innerHTML = ob_mark;
document.getElementById("percentage").innerHTML = percentage + "%";

// Function to calculate grade based on marks
function getGrade(marks) {
    if (marks >= 100) return "Enter valid marks";
    if (marks >= 90) return "A";
    if (marks >= 80) return "B";
    if (marks >= 70) return "C";
    if (marks >= 60) return "D";
    if (marks >= 50) return "E";
    if (marks >= 40) return "F";
    return "G";
}

// Display grades subject
document.getElementById("egrade").innerHTML = getGrade(en);
document.getElementById("ch-grade").innerHTML = getGrade(ch);
document.getElementById("ph-grade").innerHTML = getGrade(ph);
document.getElementById("bi-grade").innerHTML = getGrade(bi);
document.getElementById("co-grade").innerHTML = getGrade(co);

// Display overall grade
document.getElementById("grade").innerHTML = "grade:- " + getGrade(percentage);