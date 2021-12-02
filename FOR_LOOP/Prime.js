const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

let Number=prompt("Please enter the  Number: ");

let count=0;
for(var i=1;i<=Number;i++)
{
  if(Number%i==0) 
  {
      count++;
  }
}
if(count>2)
{
    console.log("IT'S NOT A PRIME")
}else{
    console.log("IT'S  A PRIME")
    console.log(count)
}