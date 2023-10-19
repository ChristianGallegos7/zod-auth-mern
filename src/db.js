import mongoose from 'mongoose'

export const conectarBD = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/fazt', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
}