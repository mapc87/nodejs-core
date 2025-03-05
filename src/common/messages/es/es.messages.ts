import { DbMessages, Views } from "../messages.inteface"

//crud and select messages
export let db_messages: DbMessages = {
    ok_create : 'Información insertada con exito',
    ok_update : 'Información actualizada con exito',
    ok_delete : 'Información eliminada con exito',
    not_found : 'Información no encontrada',
    fail_create : 'Falla al insertar información',
    fail_update : 'Falla al actualizar información',
    fail_delete : 'Falla al eliminar información',
    fail_select : 'Falla al consultar infot const',
}

export let views: Views = {
    user : 'usuario',
    rol : 'rol',
    menu : 'permisos' ,
    rol_meu : 'rol permiso' ,
    token : 'Token',
    password : 'Password',
    credentials : 'Credenciales',
    rolUsuario : 'rol usuario' ,
}

export let logs: Views = {
    user : 'usuario',
    rol : 'rol',
    menu : 'permisos' ,
    rol_meu : 'rol permiso' ,
    token : 'Token',
    password : 'Password',
    credentials : 'Credenciales',
    rolUsuario : 'rol usuario' ,
}









  