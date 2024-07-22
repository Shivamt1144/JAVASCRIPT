const accountId= 144553;
let accountEmail="Shivam@gmail.com";
var accountPassword="12345"
accountCity="Varanasi"
let accountState; //it will return undefined


// accountId=2; //not allowed

accountEmail="hc@gmail.com"
accountPassword="21212121"
accountCity="Bengaluru"

/*Do not use var because of issue in block scope and functional scope */

console.log(accountId);

console.table([accountEmail,accountId,accountPassword,accountState]);