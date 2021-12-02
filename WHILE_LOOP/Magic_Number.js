const ps=require("prompt-sync");
const prompt=ps();//To get data from command line

console.log("Imagine A Number Between 1 to 100");
let Decide="N";
let f=0;
let l=100;
let n=2;
while (Decide!="Y") {
    let Decide2=prompt(`is that the Number? ${(f+l)/2}   `);
    let Decide3;

    if(Decide2=="Yes")
    {
        Decide="Y";
        console.log("The Number is :",(f+l)/2)
    }else{
        let Decide3=prompt("Then tell me its greater or smaller than the imagin Number like   G or S ?   ");
        if(Decide3=="G")
        {
            l--;
        }else if(Decide3=="S")
        {
            f++;
        }
    }
}