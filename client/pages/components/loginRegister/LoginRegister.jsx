import { useState } from "react";
import Nav from "../Nav";
import Login from "./Login";
import Register from "./Register";

export default function LoginRegister() {
    const [show, setShow] = useState('login')
    return(
        <>
            <Nav/>
            {show === 'login' && <Login setShow={setShow}/>}
            {show === 'register' && <Register setShow={setShow}/>}
        </>
    );
}