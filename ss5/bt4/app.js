let str = prompt('nhap string')
let n = str.length
let obj = {

}
for (const char of str) {
    if(obj.hasOwnProperty(char)){
        obj[char]++    
    }
    else {
        obj[char] = 1
    }
}
for (const char in obj) {
    console.log(`(${char}, ${obj[char]})`)
}