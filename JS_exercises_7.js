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
let basePrice = 520
let discount = 120
let shippingCost = 12
let shippingTime = "5-12 days"

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15
shippingTime = "7-14 days"

// Calculating the full price
let fullPrice = basePrice - discount + shippingCost

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime)
