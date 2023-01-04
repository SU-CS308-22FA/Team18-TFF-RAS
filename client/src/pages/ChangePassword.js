import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate, useParams } from "react-router-dom";
const initialState = {
  password: "",
  repeatPassword: "",
};

const ChangePassword = () => {
  const { emailToken } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);
  const {
    showAlert,
    displayAlert,
    isResetting,
    passwordChanged,
    differentPasswordAlert,
    resetPassword,
  } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { password, repeatPassword } = values;
    if (!password || !repeatPassword) {
      displayAlert();
      return;
    }
    if (password !== repeatPassword) {
      differentPasswordAlert();
      return;
    }
    resetPassword(password, emailToken);
    console.log(emailToken);
  };

  useEffect(() => {
    if (passwordChanged) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [passwordChanged, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form form-opacity" onSubmit={onSubmit}>
        <Logo />
        <h3>Reset Password</h3>
        {showAlert && <Alert />}
        {/* email input */}
        <FormRow
          type="password"
          name="password"
          labelText="New Password"
          value={values.password}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="repeatPassword"
          labelText="Repeat Password"
          value={values.repeatPassword}
          handleChange={handleChange}
        />
        {/* password input */}
        <button type="submit" className="btn btn-block" disabled={isResetting}>
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default ChangePassword;
