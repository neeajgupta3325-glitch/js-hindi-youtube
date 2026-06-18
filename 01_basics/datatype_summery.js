// stack (primitive)  | Heap (non- primitive)

let myYoutubename = "hiteshChodriy"

let anothername = myYoutubename
anothername = "chai or code"
// console.log(myYoutubename)
// console.log(anothername)

let userOne = {
    email : "hitesh@google.com",
    upi: "sfdsf"
}
let userTwo = userOne

userTwo.email = "mohit@gmaol.com"
console.log(userOne)
console.log(userOne.email)
console.log(userTwo.email)