import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerRight">
          <h1>Bienvenido</h1>
          <h4>Crea una cuenta para iniciar en tu nueva jornada laboral.</h4>
          <h4>Esperamos que tengas un excelente dia.</h4>
          <form className="registerBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="registerInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="registerInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="registerInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Repeat Password"
              required
              ref={passwordAgain}
              className="registerInput"
              type="password"
            />

        
            <div className="registerButtons" >
              <button className="registerButton" type="submit">
                Registrarse
              </button>
              <Link to="/login">
                <button className="registerButton">Iniciar sesion</button>
              </Link>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
