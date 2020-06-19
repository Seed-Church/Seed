const getActionGroup = (penddingCase, errorCase) => {
  return {
    Pending: penddingCase,
    Error: errorCase,
  };
};

export default  getActionGroup
