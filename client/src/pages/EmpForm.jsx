import { Formik, Form } from 'formik'
import { useEmp } from '../context/EmpProvider.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
function EmpForm() {

    const { createEmp, getEmp, updateEmp } = useEmp()
    const [Empleado, setEmpleados] = useState({
        nombre: "",
        email: "",
        direccion: "",
        telefono: "",
        cedula: "",
    })
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const loadEmp = async () => {
            if (params.id) {
                const Empleado = await getEmp(params.id);
                setEmpleados({
                    nombre: Empleado.nombre,
                    email: Empleado.email,
                    direccion: Empleado.direccion,
                    telefono: Empleado.telefono,
                    cedula: Empleado.cedula,
                    estado: 1
                })
            }
        };
        loadEmp();

    })

    return (
        <div>
            <h1>{
                params.id ? "Editar empleado" : "Crear empleado"
            }
            </h1>
            <Formik
                initialValues={Empleado}
                enableReinitialize={true}
                onSubmit={async (values) => {
                    console.log(values)

                    if (params.id) {
                        await updateEmp(params.id, values)
                        navigate('/')
                    } else {
                        await createEmp(values)
                    }
                    setEmpleados({
                        nombre: "",
                        email: "",
                        direccion: "",
                        telefono: "",
                        cedula: "",
                    })
                }}
            >
                {({ handleChange, handleSubmit, values, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        <div >
                            <div >
                                <div >
                                    <div>
                                        <label>Nombre <span>*</span></label>
                                        <input type="text" id="nombre" placeholder="Nombres y apellidos" aria-label="Nombre" onChange={handleChange}
                                            value={values.nombre} required></input>
                                    </div>
                                    <div>
                                        <label>Correo electrónico <span >*</span></label>
                                        <input type="text" id="email" placeholder="Correo electrónico" aria-label="Correo electrónico" onChange={handleChange}
                                            value={values.email} required></input>
                                    </div>
                                    <div>
                                        <label >Dirección <span >*</span></label>
                                        <input type="text" id="direccion" placeholder="Dirección" aria-label="Dirección" onChange={handleChange}
                                            value={values.direccion} required></input>
                                    </div>
                                    <div>
                                        <label >Teléfono <span >*</span></label>
                                        <input type="text" id="telefono" placeholder="Teléfono" aria-label="Teléfono" onChange={handleChange}
                                            value={values.telefono} required></input>
                                    </div>

                                    <div >
                                        <label >Cédula<span>*</span></label>
                                        <input type="text" id="cedula" placeholder="Cédula" aria-label="Teléfono" onChange={handleChange}
                                            value={values.cedula} required></input>
                                    </div>


                                </div>
                            </div>
                            <div >
                                <div >
                                    <div>
                                        <button id="add" type='submit' disabled={isSubmitting}>
                                            {isSubmitting ? "Saving..." : "save"}
                                        </button>
                                    </div>
                                    <div>
                                        <a type="button"  ><h4>Cancelar</h4></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default EmpForm