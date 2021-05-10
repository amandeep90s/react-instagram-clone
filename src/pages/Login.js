import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../context/firebase";

const Login = () => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const isInvalid = password === "" || emailAddress === "";

    const handleLogin = () => {
        //
    };

    useEffect(() => {
        document.title = "Login - Instagram";
    }, []);

    return <div className="container">I am the login page</div>;
};

export default Login;
