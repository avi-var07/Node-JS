function calculate(a, b, c,callWapis){
    callWapis((a+b)+" "+c);
}

calculate(70000000, 0, "7 crore", function(sum){
    console.log("Aapne Jeete: ", sum);
})