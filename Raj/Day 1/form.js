function validateForm(){
    var name = document.getElementById("name");
    var comments = document.getElementById("comments");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    if(name.value=="" && comments.value=="" && !male.checked && !female.checked){
        alert("All fields are compulsory");
        name.focus();
        return false;
    }
    if(name.value==""){
        alert("Please fill the name field");
        name.focus();
        return false;
    }
    if(comments.value==""){
        alert("Please fill the comments field");
        comments.focus();
        return false;
    }
    if(!male.checked && !female.checked){
        alert("Please fill the gender field");
        male.focus();
        return false;
    }
    if(name.value!="" && comments.value!="" && male.checked || female.checked){
        alert("Thank you for your feedback " + name.value + ".");
    }
}
