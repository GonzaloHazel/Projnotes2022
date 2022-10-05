console.log("Webpack Working!!! 📦");
//Codigo ES6
//Default parameters
let show=(ms="No message given")=>{
    console.log(ms);
}

show();

//Async Await

function resolveAfter2Seconds(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('resolved')
        },2000)
    });
}
// Forma "antigua de llamar" 👉 resolveAfter2Seconds().then(data=>{console.log(data)});

async function asyncCall(){
    console.log("Calling");
    const result=await resolveAfter2Seconds();
    console.log(result);
}

asyncCall()