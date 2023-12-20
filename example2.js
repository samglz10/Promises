function time(ms){
    return new Promise((resolve, reject)=>{
            setTimeout(resolve, ms)
    })
}

async function makeASandwhich(){
    try{
        console.log("staring the oven");
        await time(2000)
        console.log("getting mayo and mustard")
        await time(5000)
        console.log("warming up the bread...")
        await time(500)
        console.log("spreading mayo")
        await time(1000)
        console.log("...mustard");
        await time(1000)
        console.log("getting meat");
        await time(2000)
        console.log("smashing it together and.. ")
        await time(500)
        console.log('done');
    }
    catch(error){
        console.log("catch")
        console.log(error)
    }
}
makeASandwhich();