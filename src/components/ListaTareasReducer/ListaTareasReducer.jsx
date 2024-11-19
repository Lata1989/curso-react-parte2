import { useReducer } from "react";
import { useForm } from "../../hooks/useForm";
// import { type } from "@testing-library/user-event/dist/type";


const initialState = [
    // { id: new Date().getTime(), tarea: "Explicar Reducers", finalizado: false },
    // { id: 2, tarea: "Configurar el entorno de desarrollo", finalizado: false },
    // { id: 3, tarea: "Crear componentes en React", finalizado: false },
    // { id: 4, tarea: "Integrar MongoDB con Node.js", finalizado: false },
    // { id: 5, tarea: "Implementar autenticación con Auth0", finalizado: false },
    // { id: 6, tarea: "Establecer el sistema de colas FIFO", finalizado: false },
    // { id: 7, tarea: "Diseñar el frontend para la cola", finalizado: false },
    // { id: 8, tarea: "Configurar conexión con WhatsApp API", finalizado: false },
    // { id: 9, tarea: "Separar lógica de controladores y modelos", finalizado: false },
    // { id: 10, tarea: "Probar la API de turnos", finalizado: false }
]

// const nuevaTarea = {
//     id: 11,
//     tarea: 'Aprender bien React',
//     finalizado: false
// }

// const agregarTarea = {
//     type: '[TAREAS] Agregar Tarea',
//     payload: nuevaTarea
// }

// const eliminarTarea = {
//     type: '[TAREAS] Eliminar Tarea',
//     payload: nuevaTarea
// }

// const actualizarTarea = {
//     type: '[TAREAS] Actualizar Tarea',
//     payload: nuevaTarea
// }

// const obtenerTarea = {
//     type: '[TAREAS] Obtener Tarea',
//     payload: nuevaTarea
// }

// Reducer

const tareaReducer = (state = initialState, action = {}) => {

    // if(action.type === '[TAREAS] Agregar Tarea') {
    //     return[...state, action.payload]
    // } else {
    //     return state;
    // }

    switch (action.type) {
        case '[TAREAS] Agregar Tarea':
            return [...state, action.payload]
        case '[TAREAS] Finalizar Tarea':
            console.log('Finalizar');
            return state.map(tarea => {
                if (tarea.id === action.payload) {
                    return {
                        ...tarea,
                        finalizado: !tarea.finalizado
                    }
                } return tarea

            })
            // return [...state, action.payload]
        case '[TAREAS] Eliminar Tarea':
            console.log('Eliminar');
            return state.filter(tarea => tarea.id !== action.payload)
        // return [...state, action.payload]
        case '[TAREAS] Borrar Tareas':
            console.log('Borrar todo');
            return [];
        default:
            return state;
    }
}





// console.log(tareaReducer(initialState, agregarTarea));

// Componente

export const ListaTareasReducer = () => {

    const [state, dispatch] = useReducer(tareaReducer, initialState);

    const { tarea, formState, onInputChange } = useForm({ tarea: '' });
    const agregarTarea = (event) => {
        event.preventDefault();
        if (formState.tarea === '') {
            return;
        }
        console.log(formState);
        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREAS] Agregar Tarea',
            payload: tarea
        }
        dispatch(action);
        // type: '[TAREAS] Agregar Tarea',
        // payload: nuevaTarea
    };

    const finalizarTarea = ({ id, finalizado, tarea }) => {

        // const tarea = {
        //     id,
        //     tarea,
        //     finalizado
        // }
        const action = {
            type: '[TAREAS] Finalizar Tarea',
            payload: id,
        }
        dispatch(action)

    };

    const eliminarTarea = ({id}) => {
        console.log(id);
        const action = {
            type: '[TAREAS] Eliminar Tarea',
            payload: id,
        }
        dispatch(action)
    }

    const reset = () => {
        const action = {
            type: '[TAREAS] Borrar Tareas',
            payload:"",
        }
        dispatch(action)
    }


    return (
        <>
            <form onSubmit={agregarTarea}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="tarea"
                        name="tarea"
                        placeholder="Ingrese la tarea"
                        value={tarea}
                        onChange={onInputChange}
                    />
                </div>
                <button className="btn btn-primary mr-4 ">Aceptar</button>
                <button type="button" className="btn btn-danger m-4" onClick={reset}>Reset</button>
            </form>
            <hr />
            <ul className="list-group">
                {state.map(item => {
                    return (
                        <li className="list-group-item d-flex justify-content-between" key={item.id}>
                            <span>{item.tarea}</span>
                            {/* <span>{item.finalizada ? "✅" : "❌"}</span> */}
                            <div>
                                <input
                                    type="checkbox"
                                    value={item.finalizada}
                                    onChange={() => finalizarTarea(item)}
                                />
                                <button
                                    className="btn btn-danger m-1"
                                    onClick={() => eliminarTarea(item)}
                                >🗑️</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <hr />
            <h2>4:58:00</h2>
            {/* 
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Ingresa la tarea:</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
             */}
        </>
    );
}

