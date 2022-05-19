import React from "react";
import "./scss/main.scss";

const Form = (props) => {
  return (
    <form onSubmit={props.submit}>
      <input
        className="formInput"
        type="text"
        value={props.value}
        placeholder="type city"
        onChange={props.change}
      />
      <button className="formBtn">Search city</button>
    </form>
  );
};

export default Form;
