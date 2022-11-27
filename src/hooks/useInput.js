import { useState, useCallback } from "react";

// ! Description
// used to set and reset input Fields ;

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);
  const bind = {
    value: value,
    onChange: e => {
      setValue(e.target.value);
    },
  };
  return [value, bind, reset];
};

export default useInput;
