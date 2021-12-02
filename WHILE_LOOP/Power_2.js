const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

let Number=prompt("Please enter the  Number: ");
let n=2;
let  i=1;
while(i<=Number)
{
    console.log(i,"->",n);
    n=n*2;
    i++;
}