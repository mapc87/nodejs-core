import {dbGetUser} from "@repository/user.repository"
import { UserCredentials } from "@interfaces/user.inteface"

export const AutenticarUsuario = async(credentials:UserCredentials) => {
    return new Promise(async(resolve, reject)=>{

        const userInfo = await dbGetUser(credentials.email) 

        // if(!userInfo)
        //     reject(failMessage(authObjMessages.badCreedentials))
    
        // const isValidPassword = await clsHashPassword.isValidPassword(usuarioCredenciales.password, credenciales.password)

        // if(!isValidPassword)
        //     reject(failMessage(authObjMessages.badCreedentials))

        // const authtenticatedUser = await ObtenerUsuarioAutenticado(credenciales.idUsuario)

        // if(!authtenticatedUser.estado)
        //     reject(failMessage(authObjMessages.userNotActive))

        resolve(userInfo)     
    })
}
