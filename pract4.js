// let sum=1;
// for(let row=1; row<=10; row++){
    
//     sum=sum*row;
// }
// console.log("sum of 10 is" ,sum)

// for(let row=1; row<=5; row++){
//     for(let st=1; st<=5; st++){
//         process.stdout.write("*");
//     }
//     console.log("")
// }

// let num=12345
// let nod=0
// while(num>0){
//     num=Math.floor(num/10);
//     nod=nod+1;

// }
// console.log(nod)

// let num=368849
// while(num>0){
//     let ld=num%10;
//     console.log(ld);
//     num=Math.floor(num/10)
// }

// for(let num=1; num<=100; num++){
//     let nod=0;
//     for(let div=2; div*div<=num; div++){
//         if(num%div==0){
//             nod=nod+1;
//         }
//     }
//     if(nod==0){
//         console.log("prime number", num);
//     }else{
//         console.log("not prime number",num)
//     }
// }

let number=2487845
let nod=0
while(number>0){
    let ld=number%10;
    nod=nod+1
    number=Math.floor(number/10)
}
console.log(nod)
