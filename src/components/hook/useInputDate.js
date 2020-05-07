import { useState } from "react";

const useInputDate = (initialValue) => {
  const [startDate, setStartDate] = useState(initialValue);
  return {
    startDate,
    setStartDate,
    reset: () => setStartDate(new Date()),
    bind: {
      startDate,
      onChange: (date) => {
        setStartDate(date);
      },
    },
  };
};

export default useInputDate;
