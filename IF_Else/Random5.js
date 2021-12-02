let maximum=-1;
let minimum=1000;
for(let i=1;i<6;i++){  //for loop to generate 3 random number
let data1=Math.floor(Math.random()*1000);
console.log("Random No",i,data1);
if(data1>maximum){//if condition to check maximum and minimum
    maximum=data1;
}
if(data1<minimum)
{
    minimum=data1;
}
}
console.log("Maximum",maximum,"Minimum",minimum);//print data


