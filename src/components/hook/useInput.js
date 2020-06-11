import { useState, useEffect } from "react";

const useInput = (initialValue) => {
  console.log(`initialValue`,initialValue);
  
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
  };
};

export default useInput;
