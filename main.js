array_of_names = [];

function submit(){
    var first_name = document.getElementById("name_of_student_1").value;
    var second_name = document.getElementById("name_of_student_2").value;
    var third_name = document.getElementById("name_of_student_3").value;
    var fourth_name = document.getElementById("name_of_student_4").value;

    array_of_names.push(first_name);
    array_of_names.push(second_name);
    array_of_names.push(third_name);
    array_of_names.push(fourth_name);
    console.log(array_of_names);

    document.getElementById("display_names").innerHTML=array_of_names;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";


}
function sort_names(){
    array_of_names.sort();
    console.log(array_of_names);
    document.getElementById("display_names").innerHTML=array_of_names;
    
}