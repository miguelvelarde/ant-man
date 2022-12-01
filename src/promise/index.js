const cows = 8;

const countCows = new Promise( (resolve, reject) => {
    if(cows > 10){
        resolve(`We have ${cows} cows in the farm.`);
    }
    else{
        reject("We do not have enough cows on the farm.");
    }

})

countCows.then( (result)=> {
    console.log(result);
}).catch((error)=>{
    console.error(error);
}).finally(()=>{ 
    console.log("Finally");
})