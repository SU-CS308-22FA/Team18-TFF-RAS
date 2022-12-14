import React, { useState } from "react";
import Wrapper from "../../assets/wrappers/LandingPage";
import { Logo, FormRow } from "../../components"
import { useAppContext } from "../../context/appContext";

const Objection = () => {
  const [objection, setObjection] = useState({
    showError: false,
    referee: "",
    refereeId: "356",
    anObjection: "",
    isInProcess: false,
    clubId: "136",
    isResolved: false,
    //new mongoose.Types.ObjectId()
  });

  const { createObjection } = useAppContext();
/**
 * Created so that the user can see all the objections that are made for that referee
 * @param {String} id - The id of the referee that we want to see the objections
 * @since 14.12.2022
 * @return {Object} objection - refereeId, anObjection, isInProcess, isResolved are returned after posting
 * @example getRefereeObjections("20160")
 */
async function getRefereeObjections(id) { // API
      try {
        const response = await axios.get(`${baseURL + id}`);
        const data = response.data;
        setRefObjections(data);
        setIsLoading(false);
      }
      catch (error) {
        console.log(error)
        setIsLoading(false);
        setError(true);
      }
    }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newObjection = { ...objection, [name]: value };

    if (newObjection.referee &&
        newObjection.anObjection) {
           newObjection.showError = false;
        }
    setObjection(newObjection);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (objection.referee && objection.anObjection) {
      createObjection(objection);
      setObjection({ ...objection, referee: "", anObjection: "", showError:false });
    } else {
      setObjection({ ...objection, showError: true });
    }
  };

  const refs = [{name: "kerim"}, {name: "mehmet"}]
  return (
    <Wrapper className="full-page">
        <form className="form">
          <div style={{"textAlign": "center"}}>
            <Logo/>
            <h3>Objection</h3>
          </div>
          <FormRow
            type="text"
            name="referee"
            value={objection.referee}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="anObjection"
            value={objection.anObjection}
            handleChange={handleChange}
            labelText="Objection"
          />
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        {objection.showError ? (
          <h4 className="form-error">
            {(objection.referee &&
              objection.anObjection) ? null:
              "ERROR!!! Please fill all the blanks."}
          </h4>
        ) : null}
        </form>
    </Wrapper>
  );
};

export default Objection;
