import { pool } from '../db.js'


export const getEmpleados = async (req,res)=>{
    try{
        const [result] = await pool.query('SELECT * FROM empleado');
        res.json(result)
    }catch(error){
        return res.status(500).json({message: error.message});
    }
};

export const getEmpleado = async (req,res)=>{
    try{
        const [result] = await pool.query('SELECT * FROM empleado WHERE idEmp = ? ',[req.params.id])
        if(result.length ===0)
        return res.status(404).json({message:"Empleado no encontrado"});
        res.json(result[0]);
    }catch(error){
        return res.status(500).json({message: error.message});
    }
};

export const createEmpleado = (req,res)=>{
    try{
        const {nombre, direccion, estado, email, telefono, cedula} = req.body
        pool.query('INSERT INTO empleado (nombre, direccion, estado, email, telefono, cedula) values(?,?,?,?,?,?)',
        [
            nombre,
            direccion, 
            estado, 
            email, 
            telefono,
            cedula
        ])
        res.send('creando empleado')
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const updateEmpleado = async (req,res)=>{
    try{
    const result = await pool.query('UPDATE empleado SET ? WHERE idEmp = ?',[
        req.body,
        req.params.id
    ])
    res.json(result)
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

export const deleteEmpleado = async (req,res)=>{
    try{
        const [result] = await pool.query('DELETE FROM empleado WHERE idEmp = ?',[req.params.id])

        if(result.affectedRows===0){
            return res.status(404).json({message:"Empleado no encontrado :("})
        }
        res.json(result)
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}