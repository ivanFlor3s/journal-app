import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {  startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";

export const Login = () => {

  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    email: "aldo@gmail.com",
    password: "123456",
  });

  const {loading} = useSelector((state)=>state.ui)


  const handleGoogleSignIn = ()=>{
    dispatch(startGoogleLogin())
  }

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(startLoginEmailPassword(email,password))
  };

  const { email, password } = formValues;

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input
          className="auth__input"
          autoComplete="off"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={loading} className="btn btn-primary btn-block">
          Login
        </button>
        <div className="auth__social-networks">
          Google auth
          <div className="google-btn" onClick={handleGoogleSignIn}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Create new account
        </Link>
      </form>
    </>
  );
};
