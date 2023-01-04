import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
const initialState = {
  email: "",
};

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);
  const {
    showAlert,
    displayAlert,
    resetPasswordEmailSending,
    resetPasswordEmailSent,
    sendResetPassword,
  } = useAppContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { email } = values;
    if (!email) {
      displayAlert();
      return;
    }
    const mail = { email };
    sendResetPassword(mail);
    console.log(values);
  };

  useEffect(() => {
    if (resetPasswordEmailSent) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [resetPasswordEmailSent, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form form-opacity" onSubmit={onSubmit}>
        <Logo />
        <h3>Reset Password</h3>
        {showAlert && <Alert />}
        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <button
          type="submit"
          className="btn btn-block"
          disabled={resetPasswordEmailSending}
        >
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default ForgotPassword;
