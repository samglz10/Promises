// https://www.youtube.com/watch?v=wKY4-WMmbZw
/*
async function practice(order){
    try{
    let pizza = await order;
    console.log(pizza);
    pizza.veggies = "mushrooms";
    console.log(pizza)
    return pizza;   
    }
    catch(error){
        console.log(error)
    }
    
}


practice( {
    toppings:"pepperoni",
    cheese: true,
    crust: "thick"
});
*/

//  https://dmitripavlutin.com/javascript-fetch-async-await/
async function fakeStoreAPI(){
    try{
        console.log('try')
        const response = await fetch('https://fakestoreapi.com/products?limit=5');
        const AllProducts =  await response.json();
        console.log(AllProducts);
        return AllProducts;
    }
    catch(error){
        console.log("catch")
        console.log(error)
    }
  
}
fakeStoreAPI();
