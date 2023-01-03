import { useState, useEffect } from "react";
import { FormRow, Alert } from "../../components";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const Profile = () => {
  const {
    user,
    showAlert,
    displayAlert,
    updateUser,
    isLoading,
    deleteUser,
    isDeleting,
  } = useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastName, setLastName] = useState(user?.lastName);
  const [location, setLocation] = useState(user?.location);
  const [logo, setLogo] = useState(user?.clubImage);
  const [isClub, setIsClub] = useState(false);
  const [clubName, setClubName] = useState(user?.clubName)
  useEffect(() => {
    if (user.type == "club") {
      setIsClub(true);
      console.log(user.type);
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      // test and remove temporary
      displayAlert();
      return;
    }

    updateUser({ name, email, lastName, location });
  };

  if (false) {
    return (
      <Wrapper>
        <form className="form" onSubmit={handleSubmit}>
          <h3>profile </h3>
          {showAlert && <Alert />}
  
          {/* name */}
          <div className="form-center">
            <div>{name}</div>
            <div><img src={logo}/></div>
            <FormRow
              type="text"
              name="location"
              value={location}
              handleChange={(e) => setLocation(e.target.value)}
            />
            <button className="btn btn-block" type="submit" disabled={isLoading}>
              {isLoading ? "Please Wait..." : "save changes"}
            </button>
            <button type="button" disabled={isDeleting} className="btn delete-btn" onClick={() => deleteUser(user)}>
              {isDeleting ? "Please Wait..." : "delete account"}
            </button>
          </div>
        </form>
      </Wrapper>
    );
  }
  else{
    return (
      <Wrapper>
        <form className="form" onSubmit={handleSubmit}>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 0, margin: 0}}>
          <h3>profile </h3>
          {isClub ? <img src={logo} width={60} height={60} /> : null}
          </div>
          {showAlert && <Alert />}
  
          {/* name */}
          <div className="form-center">
            {user.type === "club" ? (
              <FormRow
              type="text"
              name="club"
              value={clubName}
              disabled
            />
            ) : null}
            <FormRow
              type="text"
              name="name"
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />
            <FormRow
              labelText="last name"
              type="text"
              name="lastName"
              value={lastName}
              handleChange={(e) => setLastName(e.target.value)}
            />
            <FormRow
              type="email"
              name="email"
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />
  
            <FormRow
              type="text"
              name="location"
              value={location}
              handleChange={(e) => setLocation(e.target.value)}
            />
            <button className="btn btn-block" type="submit" disabled={isLoading}>
              {isLoading ? "Please Wait..." : "save changes"}
            </button>
            <button
              type="button"
              disabled={isDeleting}
              className="btn delete-btn"
              onClick={() => deleteUser(user)}
            >
              {isDeleting ? "Please Wait..." : "delete account"}
            </button>
          </div>
        </form>
      </Wrapper>
    );
  }
  
};

export default Profile;
