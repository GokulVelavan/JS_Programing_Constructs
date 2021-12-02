const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

console.log("1.Convert To Faranheat 2.Convert To Degree");
let Number=prompt("Please enter the  Number: ");

function  Convert_Faranheat(Number2)
{
    let degF=(Number2*9/5)+32;
    console.log(degF);
}
   function Convert_Degree(Number2)
   {
       let degC=(Number2-32)*5/9;
      console.log(degC);
   }
    
switch(Number)
{
    case 1:
    let Number2=prompt("Please enter the  Degree");
    if(Number2=>0&&Number2<=100){
    Convert_Faranheat(Number2)
    }else{
        console.log("not valid")
    }
    break;
    case 2:
    let Number2=prompt("Please enter the  Faranheat");
    if(Number2=>32&&Number2<=212){
    Convert_Degree(Number2)}
    else{
        console.log("not valid")
    }
    break;
    default:
    break;
}