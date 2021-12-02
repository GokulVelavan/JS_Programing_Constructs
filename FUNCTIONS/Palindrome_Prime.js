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

let reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

if(count>2)
{
    console.log("IT'S NOT A PRIME")
}else{
    let decide=reversedNum(Number);
    if(decide==Number)
    {
    console.log("IT'S A PRIME and Palindrome");

    }else{
    console.log("IT'S  only a PRIME and not a Palindrome");
    }
}