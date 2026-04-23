

// // function scope()
// // {
// //     if(true)
// //         {
// //         const a= 10
// //         console.log(a);
// // }
// //     }
// //    //console.log(a);

// // scope()



// // let data:number =10
// // data = 'ten'
// // console.log(data);

// // const message = 'hello'
// // let count = 30;

// // let message = 100;
// // console.log(message);

// let age:number =100
// let price:number =30
// console.log("Age : ",age )
// console.log(price )

// console.log("Print type of ",typeof(price))

// let str = "Vikram";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
// }

// console.log("Reversed String:", reversed);


let numbers: number[] = [10, 20, 30];

for (let num of numbers) {
    console.log(num);
}
console.log("farhan 3rd push"); 

function add(a: number, b: number): number {    
    return a + b;
}