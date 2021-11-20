import { connect } from 'mongoose';

// const { connect } = require('mongoose'); es otra forma de importación

const ConectarBD = async () => {
    return await connect(
        'mongodb+srv://diana:sofia2711@gestionproyectomintic.ztzhd.mongodb.net/GestionProyectoMintic?retryWrites=true&w=majority'
    ) 
    .then(() => {
        console.log('Conexion exitosa');
    })
    .catch((e) => {
        console.error('Error al conectarse a la BD',e);
    });
};
export default ConectarBD;