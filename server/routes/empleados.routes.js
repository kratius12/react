import { Router } from 'express';
import {
createEmpleado,
deleteEmpleado,
getEmpleado,
getEmpleados,
updateEmpleado
} from './controllers/empleados.controller.js'

const router = Router();

router.get('/emp',getEmpleados)

router.get('/emp/:id',getEmpleado)

router.post('/emp', createEmpleado)

router.put('/emp/:id',updateEmpleado)

router.delete('/emp/:id',deleteEmpleado)

export default router
