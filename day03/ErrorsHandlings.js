console.log("Test Started");

try{
    console.log(result);
}catch(e){
    console.log(`An error occurred ===> ${e}`);
}finally{
    console.log("Finally Block");
}


console.log("Test Ended");

console.log("--------------------------------");

throw new Error("An error occurred");

