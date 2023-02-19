// Higher Oder Function (HOF)

/*
 A function return another function, or take a function as a arguments is called a higher order function

*/

// eg

function sum(){
    console.log("printed")
}

const asyncHandler = (fun)=> async(req, res, next)=>{
    try {
        await fun(req, res, next)
    } catch (error) {
        throw error
    }
}

asyncHandler(sum)
// setInterval(sum, 2000)