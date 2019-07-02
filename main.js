let str =""
let finalResult =0 

function calculate(val){
    if ( validate(str, val) )
    {
        return false;
    }
    if (val === "=")
    {
       finalResult= eval(str);
       document.getElementById("display").innerHTML= finalResult; 
        str = finalResult
    }
    else if (val === "CLR")
    {
        str = ""
        document.getElementById("display").innerHTML= str;
    }
    else if ( val === "DEL")
    {
        str=str.substring(0, str.length-1);
        document.getElementById("display").innerHTML = str
    }
    else{
        str= str+ val;
        document.getElementById("display").innerHTML = str;
    }

}

function validate(str, val){
    let lastchar = str[str.length-1];
    let currentval= val;
    if ( ["=","-","*","/","+"].includes(lastchar) && ["=","-","*","/","+"].includes(currentval)){
        return true;
    }
    return false;
}