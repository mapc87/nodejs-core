import {dbGetUser} from "@repository/user.repository"
import { user, UserCredentials } from "@interfaces/user.inteface"
import { authMessages as am} from "@common/messages/es/auth.messages"
import { verifyPassword} from "@plugins/hash-generator.plugin"
import { buildStatusMessage } from "@plugins/build-message.plugin"


export const singInUser = async(credentials:UserCredentials):Promise<user> => {
    return new Promise(async(resolve, reject)=>{

        let returnMessage = {}
        let logMessage = ""

        if(!credentials){   
            returnMessage = buildStatusMessage (am.badCreedentials, false)    
            reject(returnMessage)
        }            

        const userInfo:user = await dbGetUser(credentials.username)

        if(!userInfo){
            returnMessage = buildStatusMessage (am.badCreedentials, false)    
            reject(returnMessage)
        }            
    
        const isValidPassword = verifyPassword(userInfo.password, credentials.password)

        if(!isValidPassword)
            return buildStatusMessage(am.badCreedentials, false)

        if(!userInfo.active)
            return buildStatusMessage(am.userNotActive, false)

        // const authtenticatedUser = await ObtenerUsuarioAutenticado(credenciales.idUsuario)
        resolve(userInfo)     
    })
}


export const singOutUser = async(credentials:UserCredentials):Promise<user> => {
    return new Promise(async(resolve, reject)=>{

        
    })
}
