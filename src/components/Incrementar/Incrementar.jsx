import React from "react";

export const Incrementar = React.memo(({incrementar}) => {

    console.log("Me estoy redibujando.");

    return(
        <>
            <button className="btn btn-primary m-1" onClick={() => incrementar(5)}>Incrementar</button>
        </>
    );
})