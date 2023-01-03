import Wrapper from "../assets/wrappers/RadioRow";

const RadioRow = ({ name, handleChange, labelText }) => {
  return (
    <Wrapper>
      <div className="div-1">
        <label> {labelText} </label>
        <ul>
          <li>
            <label className="container">
              1
              <input
                type="radio"
                name={name}
                value="1"
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              2
              <input
                type="radio"
                name={name}
                value="2"
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              3
              <input
                type="radio"
                name={name}
                value="3"
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              4
              <input
                type="radio"
                name={name}
                value="4"
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
          </li>
          <li>
            <label className="container">
              5
              <input
                type="radio"
                name={name}
                value="5"
                onChange={handleChange}
              />
              <span className="checkmark"></span>
            </label>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default RadioRow;
