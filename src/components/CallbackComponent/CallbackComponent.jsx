import { useCallback, useState } from "react";
import { Incrementar } from "../Incrementar/Incrementar";

export const CallbackComponent = () => {

    const [counter, setCounter] = useState(0);

    // const incrementarPadre = (valor) => {
    //     setContador(contador+valor);
    // }

    const incrementarPadre = useCallback((val) => {
        setCounter( contador => contador + val)
    }, [])

    return(
        <>
            <h1>Contador con useCallback:</h1>
            <p>{counter}</p>
            <Incrementar incrementar={incrementarPadre}></Incrementar>
        </>
    );
}

// Estoy en 4:20:10