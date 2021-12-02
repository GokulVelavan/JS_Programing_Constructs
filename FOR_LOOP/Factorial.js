const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

let Number=prompt("Please enter the  Number: ");

let n=1;

for(let i=Number;i>0;i--)
{
   n=n*i;
}
console.log("The Factorial is",n);
