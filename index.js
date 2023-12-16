let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
}

stocks.Fruits[1]

let order =(Fruit_name, call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)
        call_production();
    },2000)
}

let production = ()=>{ 
    setTimeout(()=>{
        console.log("production has started..")
        setTimeout(()=>{
            console.log("the food has been chopped")
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)
                setTimeout(()=>{
                    console.log("The machine has started")
                    setTimeout(()=>{
                        console.log(`Ice Cream was placed on ${stocks.holder[0]}`)
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} was added as toppings`)
                            setTimeout(()=>{
                                console.log("serve ice cream")
                            },2000)
                        },3000)
                    }, 2000)
                },1000)
            },1000)
        },2000)
    },0)
};

order(0, production);