const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

let Number1=prompt("Please enter the Number1: ");
let Number2=prompt("Please enter the Number2: ");

if(Number1==Number2)
{
    console.log("ITS A PALINDROME");

}else{
    console.log("ITS  NOT A PALINDROME");

}