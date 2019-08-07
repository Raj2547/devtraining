function validateForm() {
    this.fname = document.getElementById("fname"),
        this.lname = document.getElementById("lname"),
        this.male = document.getElementById("male"),
        this.female = document.getElementById("female"),
        this.reading = document.getElementById("reading"),
        this.singing = document.getElementById("singing"),
        this.dancing = document.getElementById("dancing"),
        this.qualification = document.getElementById("qualification"),
        this.skill = document.getElementById("skill"),
        this.married = document.getElementById("married"),
        this.unmarried = document.getElementById("unmarried"),
        this.spousename = document.getElementById("spousename"),
        this.otherdetails = document.getElementById("otherdetails"),
        this.dob = document.getElementById("dob"),
        this.email = document.getElementById("email"),
        this.skills = this.skill.querySelectorAll(".skillset option");

    this.married.addEventListener("change", function () {
        spousename.removeAttribute("disabled", "disabled");
    });
    this.unmarried.addEventListener("change", function () {
        spousename.setAttribute("disabled", "disabled");
        spousename.value = "";
    });
}

validateForm.prototype.formSave = function () {
    var str = "", blankFields = [];
    
    if (this.fname.value == "") {
        blankFields.push(this.fname);
    }
    if (this.lname.value == "") {
        blankFields.push(this.lname);
    }
    if (!this.male.checked && !this.female.checked) {
        blankFields.push(this.male);
    }
    if (!this.reading.checked && !this.singing.checked && !this.dancing.checked) {
        blankFields.push(this.reading);
    }
    if (this.qualification.value == "") {
        blankFields.push(this.qualification);
    }
    if (!skillChecked(this.skills)) {
        blankFields.push(this.skill);
    }
    if (!this.married.checked && !this.unmarried.checked) {
        blankFields.push(this.married);
    }
    if (this.married.checked && this.spousename.value == "") {
        blankFields.push(this.spousename);
    }
    if (this.otherdetails.value == "") {
        blankFields.push(this.otherdetails);
    }
    checkwhiteSpace(this.fname, blankFields);
    checkwhiteSpace(this.spousename, blankFields);
    printBlankfields(blankFields, str);
    return false;
};
function skillChecked(skills){
    for (let i in skills) {
        if (skills[i].selected) {
            return true
        }
    }
    return false;
}
function checkwhiteSpace(elementid, blankFields) {
    var len = elementid.value.length;
    for (let i = 0; i < len; i++) {
        if (elementid.value.charAt(i) === " ") {
            blankFields.push(elementid.getAttribute("name") + " cannot have spaces\n");
            break;
        }
    }
}

function printBlankfields(blankFields, str) {
    if (blankFields.length) {
        for (let i in blankFields) {
            blankFields[0].focus();
            if (typeof (blankFields[i]) !== "string") {
                str += "Please enter " + blankFields[i].getAttribute("name") + " field\n";
            } else {
                str += blankFields[i];
            }

        }
    } else {
        str = "Thank you";
        alert(str);
        document.getElementById("formelements").reset();
    }
    alert(str);
}

function resetFocus() {
    document.getElementById("fname").focus();
}
var validate = new validateForm;