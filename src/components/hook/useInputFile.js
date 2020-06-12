import { useState } from "react";

const useInputFile = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    setValue,
    reset: () => setValue([]),
    bind: {
      onChange: (event) => {
        setValue([...value, event.target.files[0]]);
      },
    },
  };
};

export default useInputFile;
