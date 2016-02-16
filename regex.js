var token = "dca"
var testCase = "(ab)(bc)(ca)"
var arr = testCase.replace(/\(/g,"[").replace(/\)/g,"]")

console.log(token.match(arr))