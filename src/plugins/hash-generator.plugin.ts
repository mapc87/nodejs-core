import bcrypt from "bcryptjs"

export const generateHashPassword = (password:string)=>{ 
    return new Promise((resolve)=>{
        const saltRounds = 8;  
        bcrypt.hash(password, saltRounds, function(err, hash){
            resolve(hash)
        })
    })    
}

export const verifyPassword = (password:string, passwordDb:string)=>{ 
    return new Promise((resolve)=>{   
        bcrypt.compare(password, passwordDb, function(err, result){
            resolve(result)
        })
    })
}
