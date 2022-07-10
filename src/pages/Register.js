import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  // global state and useNavigate

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  //  type, name, value, handleChange, labelText

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {values.showAlert && <Alert />}

        {/* name field */}
        <FormRow
          type="text"
          value={values.name}
          name="name"
          handleChange={handleChange}
        />
        {/* email field */}

        <FormRow
          type="email"
          value={values.email}
          name="email"
          handleChange={handleChange}
        />
        {/* password field */}

        <FormRow
          type="password"
          value={values.password}
          name="password"
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
