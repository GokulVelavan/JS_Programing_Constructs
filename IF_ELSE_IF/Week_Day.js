const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

let Number=prompt("Please enter the Single Digit Number: ");
if(Number<=7&&Number>0)//entering condition
{
if(Number==1)
{
    console.log("Sunday");
}else if(Number==2)
{
    console.log("Monday");
}else if(Number==3)
{
    console.log("Tuesday");
}else if(Number==4)
{
    console.log("Wednesday");
}else if(Number==5)
{
    console.log("Thursday");
}else if(Number==6)
{
    console.log("Friday");
}else
{
    console.log("Saterday");
}
}
else{
    console.log("Invalid");
}