import express from 'express'
import { conectarBD } from './db.js';
import authRoutes from './routes/auth.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors())
conectarBD();


app.use('/api', authRoutes)
app.use('/api', tasksRoutes)


app.listen(8000, () => {
    console.log('server workin in ', 8000);
})