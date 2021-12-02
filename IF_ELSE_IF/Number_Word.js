const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

let Number=prompt("Please enter the Single Digit Number: ");
if(Number==1)
{
    console.log("One");
}else if(Number==2)
{
    console.log("Two");
}else if(Number==3)
{
    console.log("Three");
}else if(Number==4)
{
    console.log("Four");
}else if(Number==5)
{
    console.log("Five");
}else if(Number==6)
{
    console.log("Six");
}else if(Number==7)
{
    console.log("Seven");
}else if(Number==8)
{
    console.log("Eight");
}else if(Number==9)
{
    console.log("Nine");
}else{
    console.log("Invalid");

}