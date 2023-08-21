// template strings/literals

const recipient = "James"
const sender = "Indi"

// Refactor the email string to use template strings
// const email = "Hey " + recipient + "! How is it going? Cheers Per"

const email = `
Hey ${recipient}! 

How is it going? 

Cheers ${sender}
`

// Notice how we concactinated the sentence to fit the html format, but with Js elements
// we used template strings; the backticks.
// and we ended up replacing the recipient with JS notation
// using ${} and removed the additions and quotations.

console.log(email)