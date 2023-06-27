import express from 'express';
import corse from 'cors'
import {PORT} from './config.js'
import indexRoutes from './routes/index.routes.js'
import taskRoutes from './routes/empleados.routes.js'
const app = express();

app.use(corse())
app.use(express.json())
app.use(indexRoutes)
app.use(taskRoutes)
app.listen(PORT);
console.log(`server is running in the port ${PORT}`)