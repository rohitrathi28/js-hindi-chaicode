const prominseOne = new Promise(function(resolve,rejection){
    setTimeout(function (params) {
        console.log("async task is complete");
        resolve()
    },1000)
})
prominseOne.then( function(){
    console.log("promise reutrn");
    
}) 