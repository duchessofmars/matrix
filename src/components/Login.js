import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../blocks/login.css";

// Intial state input field
function Login(onLogin, isOpen) {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  //useEffect hook to reset the input field state to empty strings when
  // the modal is opened
  useEffect(() => {
    if (isOpen === true) {
      setPassword("");
      setUsername("");
    }
  }, [isOpen]);

  // onChange handlers corresponding to each state variable
  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
  };
  const onUsernameChange = (evt) => {
    setUsername(evt.target.value);
  };

  function handleSubmit(evt) {
    //call onLogin
    evt.preventDefault();
    onLogin({ password, username });
  }

  return (
    <form className="form__auth" onSubmit={handleSubmit}>
      <h1 className="form__title">Login</h1>
      <div className="form__label-contianer">
        <label className="form__label">
          Username*
          </label>
          </div>
          <div>
          <input
            value={username}
            className="form__input"
            type="username"
            name="username"
            minLength="1"
            maxLength="30"
            placeholder="Username"
            onChange={onUsernameChange}
          />
      </div>
      <div className="form__label-contianer">
        <label className="form__label">
          {" "}
          Password*
          </label>
          </div>
          <div>
          <input
            value={password}
            className="form__input"
            type="password"
            name="password"
            minLength="1"
            maxLength="10"
            placeholder="Password"
            onChange={onPasswordChange}
          />
        
      </div>
      <button className="form__button">Login</button>
      <Link to="/signup">Or Signup</Link>
    </form>
  );
}

export default Login;
