import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";
import { citiesTurkey } from "../utils/constants";
const initialState = {
  name: "",
  lastName: "",
  city: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, lastName, city, email, password, isMember } = values;
    if (!email || !password || (!isMember && (!name || !lastName || !city))) {
      displayAlert();
      return;
    }

    const currentUser = { name, lastName, city, email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }

    console.log(values);
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form form-opacity" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <>
            {/* name input */}
            <FormRow
              type="text"
              name="name"
              value={values.name}
              handleChange={handleChange}
            />
            {/* last name input */}
            <FormRow
              type="text"
              name="lastName"
              labelText="Last Name"
              value={values.lastName}
              handleChange={handleChange}
            />
            {/* location input */}
            <div className="form-row">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <select
                name="city"
                className="form-select"
                value={values.city}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Please select a city
                </option>
                {citiesTurkey.map((cityTurkey, idx) => (
                  <option key={idx} value={cityTurkey.name}>
                    {cityTurkey.name}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </div>
          </>
        )}
        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet? " : "Already a member? "}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
