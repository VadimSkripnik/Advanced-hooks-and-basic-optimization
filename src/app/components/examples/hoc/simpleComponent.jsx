import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, buttonStyleFirst, buttonStyleSecond, isAuth }) => {
return (
        <>
        <button
        className="btn btn-primary"
        ref={buttonStyleFirst}
        onClick={onLogin}
        >Вoйти</button>

        <button
        className="btn btn-primary ms-5"
        ref={buttonStyleSecond}
        onClick={onLogOut}
        >Выйти из системы</button>

        </>
   );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    buttonStyleFirst: PropTypes.object,
    buttonStyleSecond: PropTypes.object,
    isAuth: PropTypes.string
};

export default SimpleComponent;
