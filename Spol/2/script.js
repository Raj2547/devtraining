function validateForm() {

    var name = document.getElementById("name");
    var comments = document.getElementById("comments");
    var radio1 = document.getElementById("radio1");
    var radio2 = document.getElementById("radio2");
    var validate = true;

    if (name.value === "" && comments.value === "" && !radio1.checked && !radio2.checked) {
        alert("All fields are compulsory");
        name.focus();
        validate = false;
        return validate;
    }
    if (name.value === "") {
        alert("Please enter your name");
        name.focus();
        validate = false;
        return validate;
    }
    if (comments.value === "") {
        alert("Please mention your comments");
        comments.focus();
        validate = false;
        return validate;
    }
    if (!radio1.checked && !radio2.checked) {
        alert("Please select your gender");
        radio1.focus();
        validate = false;
        return validate;
    }
    if (validate) {
        alert("Form submitted Succesfully");
    }

}