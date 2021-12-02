const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

console.log("1. Feet to Inch  2.Inch to Feet 3.Feet to Meter  4. Meter to Feet");
let Number=prompt("Please enter the  Number: ");
switch (Number)
{
    case 1:
        console.log(Number*12);
        break;
    case 2:
        console.log(Number/12);        
        break;
    case 3:
        console.log(Number*0.3048);
        break;
    case 4:
        console.log(Number*3.28084);
        break;
    default:
        console.log("NOT VALID");
        break
}