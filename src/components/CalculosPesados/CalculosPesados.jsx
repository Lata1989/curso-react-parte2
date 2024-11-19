import { useMemo, useState } from "react";

export const CalculosPesados = () => {

    const [listaNumeros, setListaNumeros] = useState([1, 2, 3]);
    const [show, setShow] = useState(true);

    // Mantengo el nombre getCalculo, pero uso useMemo correctamente
    const getCalculo = useMemo(() => {
        console.log("Calculando");
        return listaNumeros.reduce((a, b) => a * b, 1); // Agrego 1 como valor inicial para evitar errores
    }, [listaNumeros]);

    const agregarNumero = () => {
        setListaNumeros([...listaNumeros, listaNumeros[listaNumeros.length - 1] + 1]);
        console.log(listaNumeros);
    };

    return (
        <>
            <h2>Calculo:</h2>
            <p>{getCalculo}</p>
            <button className="btn btn-primary m-2" onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
            <button className="btn btn-danger m-2" onClick={agregarNumero}>Agregar numero</button>
        </>
    );
}


// estoy en 4:05:48