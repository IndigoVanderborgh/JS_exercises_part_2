// template strings/literals

const recipient = "James"

// Refactor the email string to use template strings
// const email = "Hey " + recipient + "! How is it going? Cheers Per"

const email = `Hey ${recipient}! How is it going? Cheers Per`

// Notice how we concactinated the sentence to fit the html format.
// we used template strings; the backticks.
// 

console.log(email)