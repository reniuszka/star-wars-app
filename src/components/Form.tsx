import React from "react";

type FormTypes = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

  value: string;
  id: string;
  name: string;
  type: string;
};

const Form = ({
  onSubmit,
  onChange,
  value,
  id,
  name,
  type = "text",
}: FormTypes) => {
  return (
    <div className="form-container">
      <form className="form" onSubmit={onSubmit}>
        <img
          src="https://fontmeme.com/permalink/230416/456f01c19e52153211799031fdcc43fa.png"
          alt="star-wars-font"
        />
        <label className="form-label" htmlFor="search-input">
          <input
            className="form-input"
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
          />
        </label>
        <button className="form-btn">Search</button>
      </form>
    </div>
  );
};

export default Form;
