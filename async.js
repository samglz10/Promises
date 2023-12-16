let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
}
/*
let is_shop_open = true;

let order =()=>{
    return new Promise((resolve, reject)=>{
       if(){
            resolve()
       } else {
        reject()
       }
    })
}
*/
// declare async first
async function order(){
    try{
        await abc
    } catch(error){
        console.log('abc does not exist', error)
    }finally{
        console.log('runs code anyway')
    }
}

order()
.then(()=>{
    console.log("....then")
})