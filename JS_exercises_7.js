// When to use let and const
// 

// const playerName = "Per"
// let credits = 45

//  if possible use const. If not, use let.

// for example, if we have:
// credits = credits - 10
// we need to differentiate between that and this:
// playerName = "something else"

// in either case, we still want to use const.

// lets do a challenge:

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:

// Here we have for variables, and to change them to const we look at which ones will not
// change propertys, ie basePrice and discount
// let basePrice = 520 -->  const basePrice = 520
// let discount = 120 --> const discount = 120
// let shippingCost = 12
// let shippingTime = "5-12 days"

const basePrice = 520
const discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price

// Same here, we have a let to be change to const
// let fullPrice = basePrice - discount + shippingCost --> const

const fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)

// const vs let summary
// Const is when the variable will not be changed; remains static
// let is when the variable will change, like a loop or counter.