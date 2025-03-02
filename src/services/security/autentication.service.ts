import {dbGetUser} from "@repository/user.repository"
import { user, UserCredentials } from "@interfaces/user.inteface"
import { authMessages } from "@common/messages/auth.messages"
import { OkMessage, failMessage } from "@common/messages/status.messages"
import { generateHashPassword, verifyPassword} from "@plugins/hash-generator.plugin"


export const singInUser = async(credentials:UserCredentials):Promise<user> => {
    return new Promise(async(resolve, reject)=>{

        const userInfo:user = await dbGetUser(credentials.email) 

         if(!userInfo)
             reject("authObjMessages.badCreedentials")
    
        const isValidPassword = verifyPassword(userInfo.password, credentials.password)

        if(!isValidPassword)
            reject(failMessage(authMessages.badCreedentials))

        // const authtenticatedUser = await ObtenerUsuarioAutenticado(credenciales.idUsuario)

        // if(!authtenticatedUser.estado)
        //     reject(failMessage(authObjMessages.userNotActive))

        resolve(userInfo)     
    })
}
