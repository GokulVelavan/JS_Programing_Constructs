const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

 let Number=prompt("Please enter the Single Digit Number: ");
if(Number<=7&&Number>0)//entering condition
{
    switch(Number)
    {
    case 1:
    console.log("Sunday");
    break;
    case 2:
    console.log("Monday");
    break;
    case 3:
    console.log("Tuesday");
    break;
    case 4:
    console.log("Wednesday");
    break;
    case 5:
    console.log("Thursday");
    break;
    case 6:
    console.log("Friday");
    break;
    default:
    console.log("Saterday");
    break;
}
}
else{
    console.log("Invalid");
}