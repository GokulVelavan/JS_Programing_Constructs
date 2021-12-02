const Head=1;
let Head_count=1;
let Tail_count=1;
while(Head_count<12 && Tail_count<12){
    let decide=Math.floor((Math.random()*2));//it will generate 0 and 1 only
    if(Head==decide)//if its not 1 then it will be 0
{
    console.log("Head",Head_count++);
}else 
{
    console.log("Tail",Tail_count++);
}
}
