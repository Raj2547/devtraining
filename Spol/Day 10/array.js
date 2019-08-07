array = () => {
    var arr1 = new Array("MAN", "and", "MAchiNe"),
        temp1 = [], temp2 = [], k = 0, l = 0,
        arr2 = [1, 2, 3, 4],
        arr3 = [1, 2, 3, 4, "and", "MAN", "and", "MAchiNe"];
    console.log("Using Join function : " + arr3.join(" | "));
    console.log("Copy array : " + arr3.slice(3, 6));
    arr3.splice(1, 3, 8, 16);
    // for (let i in arr3) {
    //     if (typeof (arr3[i]) === "string") {
    //         temp1[l] = arr3[i];
    //         l++
    //     } else {
    //         temp2[k] = arr3[i];
    //         k++
    //     }
    // }
    // temp1 = temp1.sort();
    // temp2 = temp2.sort((a, b) => { return b < a });
    // console.log(temp1.concat(temp2).join(" "));
    // console.log(arr4.sort((a, b) => { return b > a }))

    console.log( arr3.sort(
            function (a, b) {
                if (typeof (a) == "string" && typeof (b) == "string") {
                    return a > b;
                }
                else if (typeof (a) == "number" && typeof (b) == "number") {
                    return b - a;
                }
                else {
                    return typeof (a) == "number";
                }
            }));
}
array();