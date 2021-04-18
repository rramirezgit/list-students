// dotenv lee el archivo .env y trae las variables configuradas (configuracion para desarrollo) 
import dotenv from 'dotenv';
dotenv.config() 

// si la variable no esta configurada setea un valor 
export default{
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'Estudiantes', 
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost'
}