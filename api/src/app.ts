import express from 'express';
// logea las peticiones => "GET /students 304 2.232 ms - -""
import morgan from 'morgan';
//permite setear que servidores tienen permitido hacer peticiones;
import cors from 'cors';
import studentRoutes from './routes/students.routes';

const app = express();

app.use(morgan('dev'));

// cualquier servidor puede hacer peticiones 
app.use(cors())
// reconocer peticion con objetos json
app.use(express.json())
//reconocer datos que vienen de los formularios
app.use(express.urlencoded({ extended: false  }))

app.use(studentRoutes);

export default app;