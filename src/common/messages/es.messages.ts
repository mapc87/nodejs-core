//status
export const ok = "OK"
export const fail = "FAIL"

//crud
export const okCreate = 'creado'
export const okUpdate = 'actualizado'
export const okDelete = 'eliminado'
export const okCreateF = 'creada'
export const okUpdateF = 'actualizada'
export const okDeleteF = 'eliminada'
export const notFound = 'no encontrado'
export const notFoundF = 'no encontrada'
export const failCreate = 'Falla al crear'
export const failUpdate = 'Falla al actualizar'
export const failDelete = 'Falla al eliminar'
export const failFind = 'Falla al consultar'

//Genders
export const genderM = 'M'
export const genderF = 'F'
export const genderX = 'X'

//Common
const token = 'Token'
const password = 'Password'
const credenciales = 'Credentials'

export let messageOk = { status : ok, message : ""}
export let messageFail = { status : fail, message : ""}
export let messageNotAutenticated = { status : fail, message : "usuario no autenticado"}

//user
const user = 'usuario' 
export const userMessages = {   
    okCreate: `${user} ${okCreate}`,
    okUpdate: `${user} ${okUpdate}`, 
    okDelete: `${user} ${okDelete}`, 
    notFound : `${user} ${notFound}`,
    failFind : `${failFind} ${user}`,
    failCreate : `${failCreate} ${user}`,
    failUpdate : `${failUpdate} ${user}`,
    failDelete : `${failDelete} ${user}`
}

const rol = 'rol' 
export const rolMessages = { 
    okCreate: `${rol} ${okCreate}`,
    okUpdate: `${rol} ${okUpdate}`, 
    okDelete: `${rol} ${okDelete}`, 
    notFound : `${rol} ${notFound}`,   
    failCreate : `${failCreate} ${rol}`,
    failUpdate : `${failUpdate} ${rol}`,
    failDelete : `${failDelete} ${rol}`
}

const permiso = 'permiso' 
export const permisoMessages = {    
    okCreate: `${permiso} ${okCreate}`,
    okUpdate: `${permiso} ${okUpdate}`, 
    okDelete: `${permiso} ${okDelete}`, 
    notFound : `${permiso} ${notFound}`,
    failCreate : `${failCreate} ${permiso}`,
    failUpdate : `${failUpdate} ${permiso}`,
    failDelete : `${failDelete} ${permiso}`
}

const rolPermiso = 'rol permiso' 
export const rolPermisoMessages = {  
    okCreate: `${rolPermiso} ${okCreate}`,
    okUpdate: `${rolPermiso} ${okUpdate}`, 
    okDelete: `${rolPermiso} ${okDelete}`,   
    notFound : `${rolPermiso} ${notFound}`,
    failCreate : `${failCreate} ${rolPermiso}`,
    failUpdate : `${failUpdate} ${rolPermiso}`,
    failDelete : `${failDelete} ${rolPermiso}`
}

const rolUsuario = 'rol usuario' 
export const rolUsuarioMessages = {    
    okCreate: `${rolUsuario} ${okCreate}`,
    okUpdate: `${rolUsuario} ${okUpdate}`, 
    okDelete: `${rolUsuario} ${okDelete}`,   
    notFound : `${rolUsuario} ${notFound}`,
    failCreate : `${failCreate} ${rolUsuario}`,
    failUpdate : `${failUpdate} ${rolUsuario}`,
    failDelete : `${failDelete} ${rolUsuario}`
}

const product = 'producto' 
export const productMessages = {    
    okCreate: `${product} ${okCreate}`,
    okUpdate: `${product} ${okUpdate}`, 
    okDelete: `${product} ${okDelete}`,   
    notFound : `${product} ${notFound}`,
    failCreate : `${failCreate} ${product}`,
    failUpdate : `${failUpdate} ${product}`,
    failDelete : `${failDelete} ${product}`
}

const ingredient = 'ingrediente' 
export const ingredientMessages = {    
    okCreate: `${ingredient} ${okCreate}`,
    okUpdate: `${ingredient} ${okUpdate}`, 
    okDelete: `${ingredient} ${okDelete}`,   
    notFound : `${ingredient} ${notFound}`,
    failCreate : `${failCreate} ${ingredient}`,
    failUpdate : `${failUpdate} ${ingredient}`,
    failDelete : `${failDelete} ${ingredient}`
}

const ingredienteProducto = 'ingrediente producto' 
export const ingredienteProductoMessages = {    
    okCreate: `${ingredienteProducto} ${okCreate}`,
    okUpdate: `${ingredienteProducto} ${okUpdate}`, 
    okDelete: `${ingredienteProducto} ${okDelete}`,   
    notFound : `${ingredienteProducto} ${notFound}`,
    failCreate : `${failCreate} ${ingredienteProducto}`,
    failUpdate : `${failUpdate} ${ingredienteProducto}`,
    failDelete : `${failDelete} ${ingredienteProducto}`
}

const category = 'categoria' 
export const categoryMessages = {    
    okCreate: `${ingredienteProducto} ${okCreate}`,
    okUpdate: `${ingredienteProducto} ${okUpdate}`, 
    okDelete: `${ingredienteProducto} ${okDelete}`,   
    notFound : `${ingredienteProducto} ${notFoundF}`,
    failFind : `${failFind} ${category}`,
    failCreate : `${failCreate} ${category}`,
    failUpdate : `${failUpdate} ${category}`,
    failDelete : `${failDelete} ${category}`
}

const cliente = 'cliente' 
export const clienteMessages = {   
    okCreate: `${cliente} ${okCreate}`,
    okUpdate: `${cliente} ${okUpdate}`, 
    okDelete: `${cliente} ${okDelete}`, 
    notFound : `${cliente} ${notFound}`,
    failFind : `${failFind} ${cliente}`,
    failCreate : `${failCreate} ${cliente}`,
    failUpdate : `${failUpdate} ${cliente}`,
    failDelete : `${failDelete} ${cliente}`
}

const facturacion = 'facturacion' 
export const facturacionMessages = {   
    okCreate: `${facturacion} ${okCreateF}`,
    okUpdate: `${facturacion} ${okUpdateF}`, 
    okDelete: `${facturacion} ${okDeleteF}`, 
    notFound : `${facturacion} ${notFound}`,
    failFind : `${failFind} ${facturacion}`,
    failCreate : `${failCreate} ${facturacion}`,
    failUpdate : `${failUpdate} ${facturacion}`,
    failDelete : `${failDelete} ${facturacion}`
}