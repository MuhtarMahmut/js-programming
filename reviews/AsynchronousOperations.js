async function findElement(locator){

    return new Promise( (resolve, rejected) => {
        if(locator == "valid-locator"){
            resolve("Element is found")
        }else{
            rejected("Element not found")
        }
     } );
}

async function clickElement(locator){
    findElement(locator)
    .then( (result) => {
        console.log(result);
        console.log("Element clicked");
    })
    .catch( (error) => {
        console.log(error);
        console.log("Unable to click element");
    });
}

console.log("---------------------------------------");

async function test(){

    // click the element
    await clickElement("valid-locator");


}