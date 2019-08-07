

function PersonManager() {
    this.fname = document.getElementById("fname");
    this.lname = document.getElementById("lname");
    this.male = document.getElementById("male");
    this.female = document.getElementById("female");
    this.reading = document.getElementById("reading");
    this.singing = document.getElementById("singing");
    this.dancing = document.getElementById("dancing");
    this.edu = document.getElementById("edu");
    this.skill = document.getElementById("skill");
    this.married = document.getElementById("married");
    this.unmarried = document.getElementById("unmarried");
    spouse = document.getElementById("spouse");
    this.otherDetails = document.getElementById("details");
    this.dob = document.getElementById("dob");
    this.email = document.getElementById("email");
    this.gender = "male";
    this.array = [];
    this.persons = [];
    this.married.addEventListener("change", function () {
        spouse.removeAttribute("disabled", "disabled");
    });
    this.unmarried.addEventListener("change", function () {
        spouse.setAttribute("disabled", "disabled");
        spouse.value = "";
    });
    this.fname.focus();




}

PersonManager.prototype.save = function () {
    var blank = [];
    var blank2 = [];
    this.skill_selected = skillValidate(document.querySelectorAll(".skill option"));
    if (this.fname.value.trim() == "") {
        blank.push(this.fname);
    }
    if (this.lname.value == "") {
        blank.push(this.lname);
    }
    if (!this.male.checked && !this.female.checked) {
        blank.push(this.male);
    }
    if (this.male.checked || this.female.checked) {
        this.gender = this.male.checked ? this.male.value : this.female.value
    }
    if (!this.reading.checked && !this.singing.checked && !this.dancing.checked) {
        blank.push(this.reading);
    }
    if (this.edu.value == "blank") {
        blank.push(this.edu);
    }
    if (this.skill_selected) {
        blank.push(this.skill);
    }
    if (!this.married.checked && !this.unmarried.checked) {
        blank.push(this.married);
    }
    if (this.married.checked && spouse.value.trim() == "") {
        blank.push(spouse);
    }
    if (this.otherDetails.value == "") {
        blank.push(this.otherDetails);
    }
    checkWhiteSpace(this.fname, blank2);
    checkWhiteSpace(spouse, blank2);
    if (!dateValidation(this.dob.value)) {
        blank.push(this.dob);
    }
    if (!emailValidation(this.email.value)) {
        blank.push(this.email);
    }
    display(blank, blank2);

    // function createPerson(a, b, c, d) {
    //     this.persons.push(new Person(a, b, c, d));
    // }
    if (!blank.length && !blank2.length) {
        this.persons.push(new Person(this.fname.value, this.lname.value, this.gender, this.otherDetails.value));
        document.getElementById("viewBtn").addEventListener("click", function () {
            var table = document.getElementById("formData");
            table.innerHTML = "";
            table.insertAdjacentHTML("beforeend", "<tr><th>First Name</th><th>Last Name</th><th>Gender</th><th>Other Details</th></tr>");
            for (let i in a.persons) {
                table.insertAdjacentHTML("beforeend", "<tr><td>" + a.persons[i].fname + "</td><td>" + a.persons[i].lname + "</td><td>" +
                    a.persons[i].gender + "</td><td>" + a.persons[i].details + "</td></tr>");
            }
        });
    }
    return false;

}

function checkWhiteSpace(element, blank2) {
    var len = element.value.length;
    for (let i = 0; i < len; ++i) {
        if (element.value.charAt(i) === ' ') {
            blank2.push(element);
            break;
        }
    }
}
function skillValidate(skills) {
    var flag = true;
    for (let i in skills) {
        if (skills[i].selected) {
            flag = false;
        }
    }
    return flag;
}


function display(blank, blank2) {
    var str = "";
    if (blank.length || blank2.length) {
        for (let i in blank) {
            str += "Please fill " + blank[i].getAttribute("name") + " field \n";
        }
        for (let j in blank2) {
            str += blank2[j].getAttribute("name") + ' cannot have spaces!\n';
        }
        for (let j in blank2) {
            blank2[0].focus();
        }
        for (let i in blank) {
            blank[0].focus();
        }
    } else {
        str += "Thank You....";
        document.getElementById("viewBtn").removeAttribute("hidden");
        // resetAll();
    }
    alert(str);
}

function resetAll() {
    document.getElementById("form").reset();
    document.getElementById("fname").focus();
}

function dateValidation(dob) {
    var regx = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)(((19)\d\d)|(20)(0|1)[0-9])$/i;
    return regx.test(dob);
}

function emailValidation(email) {
    var emailRegx = /^\w+\w+@\w+(\.\w{2,3})+$/i;
    return emailRegx.test(email);
}

var a = new PersonManager;

function Person(fname, lname, gender, details) {
    this.fname = fname;
    this.lname = lname;
    this.gender = gender;
    this.details = details;
}




