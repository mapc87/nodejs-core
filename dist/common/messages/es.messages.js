"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facturacionMessages = exports.clienteMessages = exports.categoryMessages = exports.ingredienteProductoMessages = exports.ingredientMessages = exports.productMessages = exports.rolUsuarioMessages = exports.rolPermisoMessages = exports.permisoMessages = exports.rolMessages = exports.userMessages = exports.messageNotAutenticated = exports.messageFail = exports.messageOk = exports.genderX = exports.genderF = exports.genderM = exports.failFind = exports.failDelete = exports.failUpdate = exports.failCreate = exports.notFoundF = exports.notFound = exports.okDeleteF = exports.okUpdateF = exports.okCreateF = exports.okDelete = exports.okUpdate = exports.okCreate = exports.fail = exports.ok = void 0;
//status
exports.ok = "OK";
exports.fail = "FAIL";
//crud
exports.okCreate = 'creado';
exports.okUpdate = 'actualizado';
exports.okDelete = 'eliminado';
exports.okCreateF = 'creada';
exports.okUpdateF = 'actualizada';
exports.okDeleteF = 'eliminada';
exports.notFound = 'no encontrado';
exports.notFoundF = 'no encontrada';
exports.failCreate = 'Falla al crear';
exports.failUpdate = 'Falla al actualizar';
exports.failDelete = 'Falla al eliminar';
exports.failFind = 'Falla al consultar';
//Genders
exports.genderM = 'M';
exports.genderF = 'F';
exports.genderX = 'X';
//Common
const token = 'Token';
const password = 'Password';
const credenciales = 'Credentials';
exports.messageOk = { status: exports.ok, message: "" };
exports.messageFail = { status: exports.fail, message: "" };
exports.messageNotAutenticated = { status: exports.fail, message: "usuario no autenticado" };
//user
const user = 'usuario';
exports.userMessages = {
    okCreate: `${user} ${exports.okCreate}`,
    okUpdate: `${user} ${exports.okUpdate}`,
    okDelete: `${user} ${exports.okDelete}`,
    notFound: `${user} ${exports.notFound}`,
    failFind: `${exports.failFind} ${user}`,
    failCreate: `${exports.failCreate} ${user}`,
    failUpdate: `${exports.failUpdate} ${user}`,
    failDelete: `${exports.failDelete} ${user}`
};
const rol = 'rol';
exports.rolMessages = {
    okCreate: `${rol} ${exports.okCreate}`,
    okUpdate: `${rol} ${exports.okUpdate}`,
    okDelete: `${rol} ${exports.okDelete}`,
    notFound: `${rol} ${exports.notFound}`,
    failCreate: `${exports.failCreate} ${rol}`,
    failUpdate: `${exports.failUpdate} ${rol}`,
    failDelete: `${exports.failDelete} ${rol}`
};
const permiso = 'permiso';
exports.permisoMessages = {
    okCreate: `${permiso} ${exports.okCreate}`,
    okUpdate: `${permiso} ${exports.okUpdate}`,
    okDelete: `${permiso} ${exports.okDelete}`,
    notFound: `${permiso} ${exports.notFound}`,
    failCreate: `${exports.failCreate} ${permiso}`,
    failUpdate: `${exports.failUpdate} ${permiso}`,
    failDelete: `${exports.failDelete} ${permiso}`
};
const rolPermiso = 'rol permiso';
exports.rolPermisoMessages = {
    okCreate: `${rolPermiso} ${exports.okCreate}`,
    okUpdate: `${rolPermiso} ${exports.okUpdate}`,
    okDelete: `${rolPermiso} ${exports.okDelete}`,
    notFound: `${rolPermiso} ${exports.notFound}`,
    failCreate: `${exports.failCreate} ${rolPermiso}`,
    failUpdate: `${exports.failUpdate} ${rolPermiso}`,
    failDelete: `${exports.failDelete} ${rolPermiso}`
};
const rolUsuario = 'rol usuario';
exports.rolUsuarioMessages = {
    okCreate: `${rolUsuario} ${exports.okCreate}`,
    okUpdate: `${rolUsuario} ${exports.okUpdate}`,
    okDelete: `${rolUsuario} ${exports.okDelete}`,
    notFound: `${rolUsuario} ${exports.notFound}`,
    failCreate: `${exports.failCreate} ${rolUsuario}`,
    failUpdate: `${exports.failUpdate} ${rolUsuario}`,
    failDelete: `${exports.failDelete} ${rolUsuario}`
};
const product = 'producto';
exports.productMessages = {
    okCreate: `${product} ${exports.okCreate}`,
    okUpdate: `${product} ${exports.okUpdate}`,
    okDelete: `${product} ${exports.okDelete}`,
    notFound: `${product} ${exports.notFound}`,
    failCreate: `${exports.failCreate} ${product}`,
    failUpdate: `${exports.failUpdate} ${product}`,
    failDelete: `${exports.failDelete} ${product}`
};
const ingredient = 'ingrediente';
exports.ingredientMessages = {
    okCreate: `${ingredient} ${exports.okCreate}`,
    okUpdate: `${ingredient} ${exports.okUpdate}`,
    okDelete: `${ingredient} ${exports.okDelete}`,
    notFound: `${ingredient} ${exports.notFound}`,
    failCreate: `${exports.failCreate} ${ingredient}`,
    failUpdate: `${exports.failUpdate} ${ingredient}`,
    failDelete: `${exports.failDelete} ${ingredient}`
};
const ingredienteProducto = 'ingrediente producto';
exports.ingredienteProductoMessages = {
    okCreate: `${ingredienteProducto} ${exports.okCreate}`,
    okUpdate: `${ingredienteProducto} ${exports.okUpdate}`,
    okDelete: `${ingredienteProducto} ${exports.okDelete}`,
    notFound: `${ingredienteProducto} ${exports.notFound}`,
    failCreate: `${exports.failCreate} ${ingredienteProducto}`,
    failUpdate: `${exports.failUpdate} ${ingredienteProducto}`,
    failDelete: `${exports.failDelete} ${ingredienteProducto}`
};
const category = 'categoria';
exports.categoryMessages = {
    okCreate: `${ingredienteProducto} ${exports.okCreate}`,
    okUpdate: `${ingredienteProducto} ${exports.okUpdate}`,
    okDelete: `${ingredienteProducto} ${exports.okDelete}`,
    notFound: `${ingredienteProducto} ${exports.notFoundF}`,
    failFind: `${exports.failFind} ${category}`,
    failCreate: `${exports.failCreate} ${category}`,
    failUpdate: `${exports.failUpdate} ${category}`,
    failDelete: `${exports.failDelete} ${category}`
};
const cliente = 'cliente';
exports.clienteMessages = {
    okCreate: `${cliente} ${exports.okCreate}`,
    okUpdate: `${cliente} ${exports.okUpdate}`,
    okDelete: `${cliente} ${exports.okDelete}`,
    notFound: `${cliente} ${exports.notFound}`,
    failFind: `${exports.failFind} ${cliente}`,
    failCreate: `${exports.failCreate} ${cliente}`,
    failUpdate: `${exports.failUpdate} ${cliente}`,
    failDelete: `${exports.failDelete} ${cliente}`
};
const facturacion = 'facturacion';
exports.facturacionMessages = {
    okCreate: `${facturacion} ${exports.okCreateF}`,
    okUpdate: `${facturacion} ${exports.okUpdateF}`,
    okDelete: `${facturacion} ${exports.okDeleteF}`,
    notFound: `${facturacion} ${exports.notFound}`,
    failFind: `${exports.failFind} ${facturacion}`,
    failCreate: `${exports.failCreate} ${facturacion}`,
    failUpdate: `${exports.failUpdate} ${facturacion}`,
    failDelete: `${exports.failDelete} ${facturacion}`
};
