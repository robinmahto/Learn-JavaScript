// async and await

// suppose that you need to perfrom three async operation

// 1) select a user from database

// function getUser(userId, callback){
//     console.log("GET User form the databases");
//     setTimeout(()=>{
//         callback({
//             userId: userId,
//             username : 'jhon'
//         });
//     }, 1000)
// };

// 2) get services of the user from an API.

// function getServices(user, callback){
//    console.log(`Get Services of ${user.name} from the API.`);
//    setTimeout(()=>{
//      callback(['Email', 'VPN', 'CDN']);
//    }, 2 * 1000)
// };

// 3) calculate the service cost based on the services from the server.

// function getServiesCost(services, callback){
//     console.log(`calculate services coast of ${services}`);
//     setTimeout(()=>{
//         callback(services.length * 100);
//     }, 3 * 1000);
// };

// calling function

// getUser(100, (user)=>{
//      getServices(user, (services)=>{
//           getServiesCost(services, (cost)=>{
//              console.log(cost)
//           })
//      })
// })

//To avoid this callback hell issue, ES6 introduced the promises that allow you to write asynchronous code in more manageable ways.

// 1) select a user from database

function getUser(userId){
    return new Promise((resolve, reject)=>{
        console.log("GET User form the databases");
        setTimeout(()=>{
            resolve({
                userId: userId,
                username : 'jhon'
            });
        }, 1000)
    })
};

// 2) get services of the user from an API.

function getServices(user){
   return new Promise((resolve, reject)=>{
    console.log(`Get Services of ${user.name} from the API.`);
    setTimeout(()=>{
        resolve(['Email', 'VPN', 'CDN']);
    }, 2 * 1000)
   })
};

// 3) calculate the service cost based on the services from the server.

function getServiesCost(services){
    return new Promise((resolve, reject)=>{
        console.log(`calculate services coast of ${services}`);
        setTimeout(()=>{
            resolve(services.length * 100);
        }, 3 * 1000);
    })
};

// calling function

// getUser(100).then(getServices).then(getServiesCost).then(console.log)

async function showServiceCost(){

    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServiesCost(services);

    console.log(user)
    console.log(services)
    console.log(cost)
    
}

showServiceCost();