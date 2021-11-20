import ConectarBD from './db/db';
import UserModel from './models/user';
import { Enum_Rol } from './models/enums';

const main = async () =>{
    await ConectarBD ();

//Crear un Usuario
    await UserModel.create({
        correo:"dsl@.com",
        identificacion:"5926",
        nombre:"Diana",
        apellido:"Letrado",
        rol: Enum_Rol.estudiante,
    }).then((u) => {
        console.log('usuario creado', u);
    }).catch((e) => {
        console.error('Error creando el usuario', e);
    });

// Obtener Los Usuarios
    /* await UserModel.find()
    .then ((u) =>{
        console.log('usuarios',u);
    }) 
    .catch((e) => {
        console.error('error obteniendo ususraios', e);
    }); */
};

main();