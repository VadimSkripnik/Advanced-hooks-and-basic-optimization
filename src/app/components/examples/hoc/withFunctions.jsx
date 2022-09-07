import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
const withFunctions = (Component) => () => {
    const blockRef = useRef("");
    const buttonStyleFirst = useRef("");
    const buttonStyleSecond = useRef("");
    const [condition, setСondition] = useState("false");

    const isAuth = localStorage.getItem("auth");

    const onLogin = () => {
        setСondition((prevState) => (prevState === "false" ? "true" : "false"));
        localStorage.setItem("auth", "token");
        if (condition) {
            buttonStyleFirst.current.style.display = "none";
            buttonStyleSecond.current.style.display = "block";
        } else {
            buttonStyleSecond.current.style.display = "block";
        }
    };

    const onLogOut = () => {
        setСondition((prevState) => (prevState === "true" ? "false" : "true"));
        localStorage.removeItem("auth");
        if (condition) {
            buttonStyleSecond.current.style.display = "none";
            buttonStyleFirst.current.style.display = "block";
        } else {
            buttonStyleSecond.current.style.display = "block";
        }
    };

    useEffect(() => {
        blockRef.current === condition;
    }, [condition]);

    return (
        <CardWrapper>
            <Component
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
                buttonStyleFirst={buttonStyleFirst}
                buttonStyleSecond={buttonStyleSecond}
            />
        </CardWrapper>
    );
};

export default withFunctions;
