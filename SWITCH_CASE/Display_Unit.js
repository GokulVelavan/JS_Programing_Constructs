const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

let Number=prompt("Please enter the  Number: ");
switch(Number)
{
case 1:
    console.log("One");
    break;
case 10:
    console.log("Ten");
    break;
case 100:
    console.log("Hundred");
    break;
case 1000:
    console.log("Thousand");
    break;
case 10000:
    console.log("TenThousand");
    break;
case 100000:
    console.log("OneLakh");
    break;
default:
    console.log("Invalid");
}