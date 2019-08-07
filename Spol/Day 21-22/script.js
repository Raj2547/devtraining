function Data() {
    this.table = $("#table")[0];
    this.dataArray = [
        { fname: "abc1", lname: "xyz1", gender: "male", otherdetails: "abc123" },
        { fname: "abc2", lname: "xyz2", gender: "female", otherdetails: "abc123" },
        { fname: "abc3", lname: "xyz3", gender: "female", otherdetails: "abc123" },
        { fname: "abc4", lname: "xyz4", gender: "male", otherdetails: "abc123" }
    ];


    for (let i in this.dataArray) {
        table.insertAdjacentHTML("beforeend", 
        `<tr index="${i}" class="hide">
        <td><input type="text" value="${this.dataArray[i].fname}"></td>
        <td><input type="text" value="${this.dataArray[i].lname}"></td>
        <td><input type="text" value="${this.dataArray[i].gender}"></td>
        <td><input type="text" value="${this.dataArray[i].otherdetails}"></td>
        <td><div class="edit" index="${i}">Edit</div> 
        <div class="delete" index="${i}">Delete</div>
        </td></tr>`);
    }

    this.edit = $('.edit');
    this.deletelink = $('.delete');
    this.edit.click(this.editfn);
    this.deletelink.click(this.deletefn);
}



Data.prototype.editfn = (e) => {
    var index = e.target.getAttribute("index");
    $(`#table tr[index="${index}"]`)[0].removeClass('hide');
}
Data.prototype.deletefn = (e) => {
    console.log("Delete pressered" + e.target.getAttribute("index"));
}

function Details(fname, lname, gender, otherdetails) {
    this.fname = fname;
    this.lname = lname;
    this.gender = gender;
    this.otherdetails = otherdetails;
}


var a = new Data;