import { useCallback } from "react";
import useInput from "../hooks/useInput";

const InputField = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      console.log(firstName, lastName);
      resetFirstName();
      resetLastName();
    },
    [firstName, lastName, resetFirstName, resetLastName],
  );
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>firstName</label>
        <input type={"text"} {...bindFirstName} />
        <label>lastName</label>
        <input type={"text"} {...bindLastName} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default InputField;
