const accoID = 232323
let accoMail = "vijay@vc.com"
var accPsw = "23456"
city = "pune"

//accoID = 232323             //not change or re assigned a value in const 
accoMail = "mayur@c.com"      // can be used for re-assigned value but cannot declare again
accPsw = "23456"                //not use due to block and functional scope issues
city = "nashik"

console.log(accoID)
console.table([accoID, accoMail, accPsw, city])