
function calc(){

        let userinput=document.getElementById("finaluserinput").value;
        let printoutput=document.getElementById("buttonclicks");
        let finaloutput = eval(userinput);
        console.log(finaloutput);
        printoutput.innerHTML=finaloutput;
       

}
