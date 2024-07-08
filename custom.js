var printbtn = document.getElementById("print");
printbtn.addEventListener('click',function(){
    print();
});

// function print1(){
//     var printbtn = document.getElementById("print");
//     printbtn.addEventListener('click',function(){
//         print();
//     }); 
// }

// function call() {
    var st_name,std,division,gr_no,roll,year,sect,birth;
    st_name = prompt("Enter your Student Name:- ");
    std = prompt("Enter your Std:- ");
    division = prompt("Enter your Division:- ");
    gr_no = parseInt(prompt("Enter your Gr No:- "));
    roll = parseInt(prompt("Enter your Roll No:- "));
    year = parseInt(prompt("Enter your Year:- "));
    sect = prompt("Enter your Section:- ");
    birth = prompt("Enter your Birth Date:- ");


    document.getElementById('std').innerHTML = std;
    document.getElementById('stu-name').innerHTML = st_name;
    document.getElementById("divi").innerHTML = division;
    document.getElementById("grno").innerHTML = gr_no;
    document.getElementById("rollno").innerHTML = roll;
    document.getElementById("year").innerHTML = year;
    document.getElementById("section").innerHTML = sect;
    document.getElementById("bi-date").innerHTML = birth;


    var en,ch,ph,bi,co,ob_mark,percetage;
    en = parseInt(prompt("Enter your English marks:-"));
    ch = parseInt(prompt("Enter your Chemistry marks:-"));
    ph = parseInt(prompt("Enter your Physics marks:-"));
    bi = parseInt(prompt("Enter your Biology marks:-"));
    co = parseInt(prompt("Enter your Computer marks:-"));

    document.getElementById('en').innerHTML = en;
    document.getElementById('ch').innerHTML = ch;
    document.getElementById('ph').innerHTML = ph;
    document.getElementById('bi').innerHTML = bi;
    document.getElementById('co').innerHTML = co;

    ob_mark = en+ch+ph+bi+co;
    document.getElementById("ob-mark").innerHTML = ob_mark;


    // emglish-grade
    if(en >= 100){
        document.getElementById("egrade").innerHTML = "Enter valid marks";
    }else if(en <= 100 && en >= 90){
        document.getElementById("egrade").innerHTML = "A";
    }else if(en <= 90 && en >= 80){
        document.getElementById("egrade").innerHTML = "B";
    }else if(en <= 80 && en >= 70){
        document.getElementById("egrade").innerHTML = "C";
    }else if(en <= 70 && en >= 60){
        document.getElementById("egrade").innerHTML = "D";
    }else if(en <= 60 && en >= 50){
        document.getElementById("egrade").innerHTML = "E";
    }else if(en <= 50 && en >= 40){
        document.getElementById("egrade").innerHTML = "F";
    }else{
        document.getElementById("egrade").innerHTML = "G";
    }

    // chemistry-grade
    if(ch >= 100){
        document.getElementById("ch-grade").innerHTML = "Enter valid marks";
    }else if(ch <= 100 && ch >= 90){
        document.getElementById("ch-grade").innerHTML = "A";
    }else if(ch <= 90 && ch >= 80){
        document.getElementById("ch-grade").innerHTML = "B";
    }else if(ch <= 80 && ch >= 70){
        document.getElementById("ch-grade").innerHTML = "C";
    }else if(ch <= 70 && ch >= 60){
        document.getElementById("ch-grade").innerHTML = "D";
    }else if(ch <= 60 && ch >= 50){
        document.getElementById("ch-grade").innerHTML = "E";
    }else if(ch <= 50 && ch >= 40){
        document.getElementById("ch-grade").innerHTML = "F";
    }else{
        document.getElementById("ch-grade").innerHTML = "G";
    }

    // physics-grade
    if(ph >= 100){
        document.getElementById("ph-grade").innerHTML = "Enter valid marks";
    }else if(ph <= 100 && ph >= 90){
        document.getElementById("ph-grade").innerHTML = "A";
    }else if(ph <= 90 && ph >= 80){
        document.getElementById("ph-grade").innerHTML = "B";
    }else if(ph <= 80 && ph >= 70){
        document.getElementById("ph-grade").innerHTML = "C";
    }else if(ph <= 70 && ph >= 60){
        document.getElementById("ph-grade").innerHTML = "D";
    }else if(ph <= 60 && ph >= 50){
        document.getElementById("ph-grade").innerHTML = "E";
    }else if(ph <= 50 && ph >= 40){
        document.getElementById("ph-grade").innerHTML = "F";
    }else{
        document.getElementById("ph-grade").innerHTML = "G";
    }

    // biology-grade
    if(bi >= 100){
        document.getElementById("bi-grade").innerHTML = "Enter valid marks";
    }else if(bi <= 100 && bi >= 90){
        document.getElementById("bi-grade").innerHTML = "A";
    }else if(bi <= 90 && bi >= 80){
        document.getElementById("bi-grade").innerHTML = "B";
    }else if(bi <= 80 && bi >= 70){
        document.getElementById("bi-grade").innerHTML = "C";
    }else if(bi <= 70 && bi >= 60){
        document.getElementById("bi-grade").innerHTML = "D";
    }else if(bi <= 60 && bi >= 50){
        document.getElementById("bi-grade").innerHTML = "E";
    }else if(bi <= 50 && bi >= 40){
        document.getElementById("bi-grade").innerHTML = "F";
    }else{
        document.getElementById("bi-grade").innerHTML = "G";
    }

    // computer-grade
    if(co >= 100){
        document.getElementById("co-grade").innerHTML = "Enter valid marks";
    }else if(co <= 100 && co >= 90){
        document.getElementById("co-grade").innerHTML = "A";
    }else if(co <= 90 && co >= 80){
        document.getElementById("co-grade").innerHTML = "B";
    }else if(co <= 80 && co >= 70){
        document.getElementById("co-grade").innerHTML = "C";
    }else if(co <= 70 && co >= 60){
        document.getElementById("co-grade").innerHTML = "D";
    }else if(co <= 60 && co >= 50){
        document.getElementById("co-grade").innerHTML = "E";
    }else if(co <= 50 && co >= 40){
        document.getElementById("co-grade").innerHTML = "F";
    }else{
        document.getElementById("co-grade").innerHTML = "G";
    }

    percetage = ob_mark/5;
    document.getElementById("percentage").innerHTML = percetage + "%";

    if(percetage >= 100){
        document.getElementById("grade").innerHTML = "Enter valid marks" + percetage;
    }else if(percetage <= 100 && percetage >= 90){
        document.getElementById("grade").innerHTML = "grade:- A";
    }else if(percetage <= 90 && percetage >= 80){
        document.getElementById("grade").innerHTML = "grade:- B";
    }else if(percetage <= 80 && percetage >= 70){
        document.getElementById("grade").innerHTML = "grade:- C";
    }else if(percetage <= 70 && percetage >= 60){
        document.getElementById("grade").innerHTML = "grade:- D";
    }else if(percetage <= 60 && percetage >= 50){
        document.getElementById("grade").innerHTML = "grade:- E";
    }else if(percetage <= 50 && percetage >= 40){
        document.getElementById("grade").innerHTML = "grade:- F";
    }else{
        document.getElementById("grade").innerHTML = "grade:- G";
    }

// }

document.getElementById("dl-pdf").onclick = function(){
    var element = document.querySelector('.invoice');
    html2pdf(element);
};

// window.onload = function(){
//     document.getElementById("dl-pdf")
//     .addEventListener("click", ()=>{
//         const invoice = this.document.querySelector(".invoice");
//         console.log(invoice);
//         console.log(window);
//         html2pdf().from(invoice).save();
//     })
// }