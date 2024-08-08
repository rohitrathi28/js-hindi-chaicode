const prominseOne = new Promise(function(resolve,rejection){
    setTimeout(function (params) {
        console.log("async task is complete");
        resolve()
    },1000)
})
prominseOne.then( function(){
    console.log("promise reutrn");
    
}) 



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()

    },1000)
}).then(function(){
    console.log("async2 resolved")
})





const prmoisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "chai",email: "cdcsdcdcs2" })
    },1000)
})


prmoisethree.then(function(user){
    console.log(user)

})



const prmosefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "hitesh ", password: "1234"})
        }
        else{
            reject('nai dena bhencod')
        }
    },1000)
})

prmosefour.then((user)=>{
     console.log(user);
     return user.username
     
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>console.log("prommise ka kam hogya ha"))



const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "javascript" , password: "1234"})
        }
        else{
            reject('nai dena bhencod JS')
        }
    },1000)
})


async function consumefivepromise(params) {
    try {
        const response = await promisefive
    console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
    
}

consumefivepromise()



// async function getallusers() {
//      try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const DAta = await response.json()
//     console.log(DAta);
//      } catch (error) {
//          console.log(error);
         
//      }
    
//     }

    // getallusers()



fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((DAta)=>{
console.log (DAta)
})
.catch((error)=>console.log(error))


