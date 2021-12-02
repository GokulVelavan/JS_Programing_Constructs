const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

let Number=prompt("Please enter the  Number: ");

for(let i=1;i<=Number;i++)
{
    console.log(i,"->",1,"/",i)
}