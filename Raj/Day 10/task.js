function arrayMethods() {
    var alpha = new Array("MAN", "and", "MAchiNe"), num = [1, 2, 3, 4],
        temp1 = [], temp2 = [], j = 0, k = 0,
        alphaNum = [1, 2, 3, 4, "and", "MAN", "and", "MAchiNe"];
    var str = alphaNum.join(" | ")
    console.log("Original array elements seperated with '|': " + str);
    var str1 = alphaNum.slice(3, 6);
    console.log("copied array is: " + str1);
    console.log("Original array is: " + alphaNum);
    alphaNum.splice(1, 3, 8, 16)
    console.log("replaced array is: " + alphaNum);
    console.log("Sorted array is: " + alphaNum.sort(
        function (a, b) {
            if (typeof (a) === "string" && typeof (b) === "string") {
                return a > b;
            } else if (typeof (a) === "number" && typeof (b) === "number") {
                return b - a;
            } else {
                return typeof (a) === "number"
            }
        }
    ));
    // for (let i in alphaNum) {
    //     if (typeof (alphaNum[i]) === "string") {
    //         temp1[j] = alphaNum[i]
    //         j++
    //     }
    //     else {
    //         temp2[k] = alphaNum[i]
    //         k++
    //     }
    // }
    // temp1 = temp1.sort()
    // temp2 = temp2.sort(function (a, b) { return b - a });
    // console.log("Sorted array is: " + temp1.concat(temp2));


}
arrayMethods();