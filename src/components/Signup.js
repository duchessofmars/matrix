import "../blocks/signup.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Signup(onRegister, isOpen) {
  // Intial state input field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");

  //useEffect hook to reset the input field state to empty strings when
  // the modal is opened
  useEffect(() => {
    if (isOpen === true) {
      setPassword("");
      setUsername("");
      setEmail("");
      setAvatar("");
    }
  }, [isOpen]);

  // onChange handlers corresponding to each state variable
  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };
  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
  };
  const onUsernameChange = (evt) => {
    setUsername(evt.target.value);
  };
  const onAvatarChange = (evt) => {
    setAvatar(evt.target.value);
  };

  function handleSubmit(evt) {
    //call onRegister
    evt.preventDefault();
    onRegister({ email, password, username, avatar });
  }

  return (
    <form className="form__auth" onSubmit={handleSubmit}>
      <h1 className="form__title">Sign Up</h1>
      <div  className="form__label-contianer">
        <label className="form__label">Email*</label>
      </div>
      <div>
        <input
          value={email}
          className="form__input"
          type="email"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Email"
          onChange={onEmailChange}
        />
      </div>
      <div  className="form__label-contianer">
        <label className="form__label">Password*</label>
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
      <div  className="form__label-contianer">
        <label className="form__label">Username*</label>
      </div>
      <div>
        <input
          value={username}
          className="form__input"
          type="text"
          name="name"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          onChange={onUsernameChange}
        />
      </div>
      <div  className="form__label-contianer">
        <label className="form__label">Avatar URL*</label>
      </div>
      <div>
        <input
          value={avatar}
          className="form__input"
          type="url"
          name="link"
          minLength="1"
          maxLength="300"
          placeholder="Avatar URL"
          onChange={onAvatarChange}
        />
      </div>
      <button className="form__button">Signup</button>
      <Link to="/login">Or Login</Link>
    </form>
  );
}

export default Signup;
