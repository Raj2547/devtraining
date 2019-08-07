function factorial() {
    var num = $("#number").val();
    var count = 1;
    var fact_arr = [1];

    for (let i = 2; i <= num; i++) {
        count = multiplicaton(i, count, fact_arr);
    }
    var strFact = "";
    for (let i = count - 1; i >= 0; i--) {
        strFact += fact_arr[i];
    }
    $("#display").text(strFact);
    return strFact;
}


/*
*/

function multiplicaton(num, count, fact_arr) {
    var carry = 0;
    var prod;
    for (let j = 0; j < count; j++) {
        prod = fact_arr[j] * num + carry;
        fact_arr[j] = prod % 10;
        carry = Math.floor(prod / 10);
    }
    while (carry) {
        fact_arr[count] = carry % 10;
        count++;
        carry = Math.floor(carry / 10);
    }
    return count;
}

// $("#btn").click(function () {

//     if ($("#number").val() != "") {
//         $("#display").text((factorial($("#number").val())));
//     }

// });
// $('#number').keypress(function (event) {
//     if ($("#number").val() != "") {
//         var keycode = (event.keyCode ? event.keyCode : event.which);
//         if (keycode == '13') {
//             $("#display").text((factorial($("#number").val())));
//         }
//     }


// });