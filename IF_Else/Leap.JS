const ps=require("prompt-sync");
const prompt=ps();//To get data from command line


let Year=prompt("Please enter the Year: ");
if(Year%4==0)
{
    console.log("Its a Leap Year")
}else{
    console.log("Its Not a Leap Year");
}