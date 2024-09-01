import { useCounter } from "../../hooks/useCounter";

export const ContadorComponent = () => {

    const { contador, incrementar, decrementar, resetear } = useCounter(0);

    return (
        <>
            <h1>Contador: {contador}</h1>
            <button className="m-2 btn btn-primary" onClick={() => incrementar()}>+1</button>
            <button className="m-2 btn btn-danger" onClick={() => resetear()}>Reset</button>
            <button className="m-2 btn btn-primary" onClick={() => decrementar()}>-1</button>
        </>
    );
}