import express from 'express'
import { conectarBD } from './db.js';
import authRoutes from './routes/auth.routes.js'
import tasksRoutes from './routes/tasks.routes.js'
import cookieParser from 'cookie-parser'

const app = express();
app.use(express.json())
app.use(cookieParser())
conectarBD();


app.use(authRoutes)
app.use(tasksRoutes)


app.listen(8000, () => {
    console.log('server workin in ', 8000);
})