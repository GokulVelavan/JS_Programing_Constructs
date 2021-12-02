const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

let Number=prompt("Please enter the  Number: ");
if(Number==1)
{
    console.log("One");
}else if(Number==10)
{
    console.log("Ten");
}else if(Number==100)
{
    console.log("Hundred");
}else if(Number==1000)
{
    console.log("Thousand");
}else if(Number==10000)
{
    console.log("TenThousand");
}else if(Number==100000)
{
    console.log("OneLakh");
}else
{
    console.log("seriously?");
}