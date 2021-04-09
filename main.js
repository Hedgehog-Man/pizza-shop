namestudentarray=[];

function submit(){
var name_1=document.getElementById("name_of_the_student_1").value;
var name_2=document.getElementById("name_of_the_student_2").value;
var name_3=document.getElementById("name_of_the_student_3").value;
var name_4=document.getElementById("name_of_the_student_4").value;

namestudentarray.push(name_1);
namestudentarray.push(name_2);
namestudentarray.push(name_3);
namestudentarray.push(name_4);

console.log(namestudentarray);

document.getElementById("display_name").innerHTML=namestudentarray;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
    namestudentarray.sort();
    console.log(namestudentarray);

    document.getElementById("display_name").innerHTML=namestudentarray;
}