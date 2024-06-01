/*const msg=async()=>{
    return "this is async example"
}

msg().then(data=>console.log(data))*/

/*const msg = async()=>{
    let a = await "this is an exampke for async &await";
    console.log(a)
}
console.log("this is before calling msg function")
msg();
console.log("this is after calling msg function")*/

function delay(ms){
    return new Promise(resolve=> setTimeout(resolve,ms))
}

async function getAfterDelay(){
    console.log("this is before delay")
    await delay(2000)
    console.log("this is after delay")

}
console.log("this is before calling getAfterDelay function")
getAfterDelay()
console.log("this is after calling getAfterDelay function")