import React from "react";

const AnswerContext = React.createContext({
  currentAnswer: "",
  handleChange: () => {},
});

export default AnswerContext;
