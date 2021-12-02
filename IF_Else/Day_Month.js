const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

let Date=prompt("Please enter the Date: ");
let Month=prompt("Please enter the Month: ");

if(((Date>20&&Date<32) && (Month=="March"||Month=="April"||Month=="May")) || ((Date<20 && Date>0) && (Month=="April"||Month=="May"||Month=="June")) )//LOGIC
{
 console.log("IT PRESENTS INSIDE")
}else{
 console.log("No ITS NOT PRESENT")
}