function fact(){
    var a = document.getElementById("num").value;
var temp =1;
var fact_arr=[1];
var i;
for(i = 2;i <= a;i ++){
    temp=multiply(temp,i,fact_arr); 
}
var factorial="";
for(i=temp-1;i>=0;i--){
    factorial+=fact_arr[i];
}
document.getElementById("ans").value=factorial;
}

function multiply(temp,i,fact_arr){
   let carry=0;
   var prod;
   for(j=0;j<temp;j++){
       prod=fact_arr[j]*i+carry;
       fact_arr[j]= prod%10;
       carry=Math.floor(prod/10);
    }
    while(carry){
        fact_arr[temp]=carry%10;
        temp++;
        carry=Math.floor(carry/10);
    }
    return temp;
}
