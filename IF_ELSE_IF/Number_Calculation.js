const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

let a=prompt("Please enter the  value of a: ");
let b=prompt("Please enter the  value of b: ");
let c=prompt("Please enter the  value of c: ");

let maximum=-1;
let minimum=1000;

let array=[];
let index1,index2;
let operation_1=a+b*c;
let operation_2=a%b+c;
let operation_3=c+a/b;
let operation_4=a*b+c;

array.push(operation_1,operation_2,operation_3,operation_4);

for(let i=0;i<5;i++)
{
    if(array[i]>maximum)
    {
        maximum=array[i];
        index1=i+1;
    }
    if(array[i]<minimum)
    {
        minimum=array[i];
        index2=i+1;
    }
}

console.log("Maximum is from Operation",index1,"-",maximum," Minimum is from operation",index2,"-",minimum)