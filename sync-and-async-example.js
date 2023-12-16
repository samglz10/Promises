//synchronous
console.log("I")
console.log("eat")
console.log("ice cream")
console.log("with a")
console.log("spoon")

//asynchronous
console.log("I");

// This will be shown after 2 seconds

setTimeout(()=>{
  console.log("eat");
},3000)

console.log("Ice Cream")

//callbacks
function one(call_two){
  console.log("step 1 complete...call step 2");
  call_two();
}
function two(){
  console.log("step 2")
}

one(two);
