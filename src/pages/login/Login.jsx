import { useContext, useRef } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
            <div className="registerWrapper">
        <div className="loginRight">
        <h1>Bienvenido</h1>
          <h4>Inicia sesion en tu cuenta para iniciar en tu jornada laboral.</h4>
          <h4>Esperamos que tengas un excelente dia.</h4>
          <form className="loginBox" onSubmit={handleClick}>
            
            <input

              placeholder="&#xf007;   Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="&#xf084;   Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <div className="loginButtons">
            <Link to="/register"> 
            <button className="loginRegisterButton">
                Registrarse
            </button>
            </Link>
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Iniciar sesion"
              )}
            </button>
            

            </div>
          </form>
        </div>
        </div>
    </div>
  );
}
