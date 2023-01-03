// eslint-disable-next-line react/prop-types
const FormRow = ({ type, name, value, handleChange, labelText, placeholder, disabled = false }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className="form-input"
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default FormRow;
