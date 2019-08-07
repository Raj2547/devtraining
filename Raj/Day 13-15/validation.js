function personManager() {
    this.fname = document.getElementById("fname");
        this.lname = document.getElementById("lname");
        this.male = document.getElementById("male");
        this.female = document.getElementById("female");
        this.reading = document.getElementById("reading");
        this.singing = document.getElementById("singing");
        this.dancing = document.getElementById("dancing");
        this.qualification = document.getElementById("qualification");
        this.skill = document.getElementById("skill");
        this.married = document.getElementById("married");
        this.unmarried = document.getElementById("unmarried");
        this.spousename = document.getElementById("spousename");
        this.otherdetails = document.getElementById("otherdetails");
        this.dob = document.getElementById("dob");
        this.email = document.getElementById("email");
        this.gender;
        this.persons=[];
        this.skills = this.skill.querySelectorAll(".skillset option");

    this.married.addEventListener("change", function () {
        spousename.removeAttribute("disabled", "disabled");
    });
    this.unmarried.addEventListener("change", function () {
        spousename.setAttribute("disabled", "disabled");
        spousename.value = "";
    });
    
    
}

personManager.prototype.formSave = function () {
    var str = "", blankFields = [],blankFields2 = []; 
    if (this.fname.value.trim() == "") {
        blankFields.push(this.fname);
    }
    if (this.lname.value == "") {
        blankFields.push(this.lname);
    }
    if (!this.male.checked && !this.female.checked) {
        blankFields.push(this.male);
    }
    if(this.male.checked){
        this.gender= this.male.value;
    }else{
        this.gender= this.female.value;
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
    if (this.married.checked && this.spousename.value.trim() == "") {
        blankFields.push(this.spousename);
    }
    if (this.otherdetails.value == "") {
        blankFields.push(this.otherdetails);
    }
    if(!dateValidation(this.dob.value)){
        blankFields.push(this.dob)
    }
    if(!emailValidation(this.email.value)){
        blankFields.push(this.email)
    }
    checkwhiteSpace(this.fname, blankFields2);
    checkwhiteSpace(this.spousename, blankFields2);
    printBlankfields(blankFields,str,blankFields2);
    if(!blankFields.length && !blankFields2.length){
        this.persons.push(new Person(this.fname.value,this.lname.value,this.gender,this.otherdetails.value));
        document.getElementById("viewdata").addEventListener("click", function () {
            document.getElementById("header").removeAttribute("hidden","hidden");
            document.getElementById("datadisplay").removeAttribute("hidden","hidden");
            var table = document.getElementById("datadisplay");
            table.innerHTML = ""; 
            // var header = document.createTextNode("Data entered")
            // table.appendChild(header);
            table.insertAdjacentHTML("beforeend", "<tr><th>First Name</th><th>Last Name</th><th>Gender</th><th>Other Details</th></tr>");
            for (let i in personmanager.persons) {
                table.insertAdjacentHTML("beforeend", "<tr><td>" + personmanager.persons[i].fname + "</td><td>" + personmanager.persons[i].lname + "</td><td>" +
                    personmanager.persons[i].gender + "</td><td>" + personmanager.persons[i].otherdetails + "</td></tr>");
            }
        });
    }
    return false;
    
};

function checkwhiteSpace(elementid, blankFields2) {
    var len = elementid.value.length;
    for (let i = 0; i < len; i++) {
        if (elementid.value.charAt(i) === " ") {
            blankFields2.push(elementid);
            break;
        }
    }
}

function printBlankfields(blankFields,str,blankFields2) {
    if (blankFields.length || blankFields2.length) {
        for (let j in blankFields2) { 
            if (typeof (blankFields2[j]) !== "string") {
                blankFields2[0].focus();
                str += blankFields2[j].getAttribute("name") + " cannot have spaces\n";
            }
        }
        for (let i in blankFields) { 
            if (typeof (blankFields[i]) !== "string") {
                blankFields[0].focus();
                str += "Please enter " + blankFields[i].getAttribute("name") + " field\n";
            } 
        }
        
    } else {
        str = "Thank you";
        document.getElementById("viewdata").removeAttribute("hidden","hidden");
        //alert(str);
        //document.getElementById("formelements").reset();
    }
    alert(str);
}

function resetFocus() {
    document.getElementById("fname").focus();
    document.getElementById("spousename").setAttribute("disabled","disabled");
    document.getElementById("viewdata").setAttribute("hidden","hidden");
}

function dateValidation(dob) {
    var regx = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)(((19)\d\d)|(20)(0|1)[0-9])$/i;
    return regx.test(dob);
}

function emailValidation(email) {
    var emailRegx = /^\w+\w+@\w+(\.\w{2,3})+$/i;
    return emailRegx.test(email);
}
function skillChecked(skills){
    for (let i in skills) {
        if (skills[i].selected) {
            return true
        }
    }
    return false;
}
function Person(fname,lname,gender,other) {
    this.fname=fname;
    this.lname=lname;
    this.gender=gender;
    this.otherdetails=other;
}
var personmanager = new personManager;