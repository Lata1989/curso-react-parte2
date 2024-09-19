import { useEffect, useRef } from "react";
import { useForm } from "../../hooks/useForm";

export const FormularioComponent = () => {

    const focusRef = useRef();

    const initialForm = {
        userName: "",
        email: "",
        password: ""
    };

    // const { formState, onInputChange } = useForm(initialForm);
    const {formState, userName, email, password, onInputChange } = useForm(initialForm);

    // const { userName, email, password } = formState;

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    }

    useEffect(() => {
        focusRef.current.focus();
        return () => {
            // second
        }
    })

    return (
        <>
            <h2>Formulario Component:</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="form-label">Username:</label>
                    <input type="text"
                        className="form-control"
                        name="userName"
                        id="exampleInputUsername"
                        aria-describedby="userHelp"
                        placeholder="Enter your username"
                        value={userName}
                        onChange={onInputChange}>

                    </input>
                    <div id="userHelp" className="form-text">We'll never share your user with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email address:</label>
                    <input 
                        ref = {focusRef}
                        type="email"
                        className="form-control"
                        name="email"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Enter your email"
                        value={email}
                        onChange={onInputChange}>
                    </input>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password"
                        className="form-control"
                        name="password"
                        id="exampleInputPassword1"
                        placeholder="Enter your password"
                        value={password}
                        onChange={onInputChange}>
                    </input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}