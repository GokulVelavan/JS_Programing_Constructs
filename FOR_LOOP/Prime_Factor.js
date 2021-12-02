const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

let Number=prompt("Please enter the  Number: ");

for(var i=1;i*i<=Number;i++)
{
  if(Number%i==0) 
  {
    console.log(i)
  }
}
