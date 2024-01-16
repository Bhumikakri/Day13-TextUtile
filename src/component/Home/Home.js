import React, { useReducer } from "react";
import "./home.css";

const initialState = {
  text: "",
  summary: {
    numberOfWords: 0,
    numberOfCharacters: 0,
    readingTime: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TEXT":
      const newText = action.payload;
      const wordCount = newText
        .split(/\s+/)
        .filter((word) => word !== "").length;
      const readingTime = calculateReadingTime();
      return {
        ...state,
        text: newText,
        summary: {
          ...state.summary,
          numberOfWords: wordCount,
          numberOfCharacters: newText.length,
          readingTime,
        },
      };
    case "CONVERT_UPPERCASE":
      return { ...state, text: state.text.toUpperCase() };
    case "CONVERT_LOWERCASE":
      return { ...state, text: state.text.toLowerCase() };
    case "CLEAR_TEXT":
      return {
        ...state,
        text: "",
        summary: { ...state.summary, numberOfWords: 0, numberOfCharacters: 0 },
      };
    case "COPY_TO_CLIPBOARD":
      navigator.clipboard.writeText(state.text);
      return state;
    case "REMOVE_EXTRA_SPACE":
      return { ...state, text: state.text.replace(/\s+/g, " ") };
    default:
      return state;
  }
};

const calculateReadingTime = () => {
  return 0;
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    dispatch({ type: "SET_TEXT", payload: e.target.value });
  };

  const handleButtonClick = (actionType) => {
    dispatch({ type: actionType });
  };

  const ForShowAlert=()=>{
    alert("Cannot edit in preview");
  }

  return (
    <div className="Home">
      <h1>TextUtils - Word Counter, Character Counter, Remove Extra Space</h1>
      <h3>Enter Your Text Here:</h3>
      <textarea
        value={state.text}
        cols="170"
        rows="15"
        onChange={handleInputChange}
      />
      <div className="AllBtns">
        <button
          onClick={() => handleButtonClick("CONVERT_UPPERCASE")}
          disabled={state.text.length === 0}
          style={
            state.text.length === 0
              ? { opacity: "0.9", cursor: "not-allowed" }
              : {}
          }
        >
          Convert Uppercase
        </button>
        <button
          onClick={() => handleButtonClick("CONVERT_LOWERCASE")}
          disabled={state.text.length === 0}
          style={
            state.text.length === 0
              ? { opacity: "0.9", cursor: "not-allowed" }
              : {}
          }
        >
          Convert Lowercase
        </button>
        <button
          onClick={() => handleButtonClick("CLEAR_TEXT")}
          disabled={state.text.length === 0}
          style={
            state.text.length === 0
              ? { opacity: "0.9", cursor: "not-allowed" }
              : {}
          }
        >
          Clear Text
        </button>
        <button
          onClick={() => handleButtonClick("COPY_TO_CLIPBOARD")}
          disabled={state.text.length === 0}
          style={
            state.text.length === 0
              ? { opacity: "0.9", cursor: "not-allowed" }
              : {}
          }
        >
          Copy To Clipboard
        </button>
        <button
          onClick={() => handleButtonClick("REMOVE_EXTRA_SPACE")}
          disabled={state.text.length === 0}
          style={
            state.text.length === 0
              ? { opacity: "0.9", cursor: "not-allowed" }
              : {}
          }
        >
          Remove Extra Space
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Summary Of Your Text</h1>
        <span>Number of words: {state.summary.numberOfWords}</span>
        <span>Number of characters: {state.summary.numberOfCharacters}</span>
        <span>Reading Time: {state.summary.readingTime}</span>
      </div>
      <div>
        <h2>Preview Document</h2>
        <textarea value={state.text}  onChange={ForShowAlert} />
      </div>
    </div>
  );
};

export default Home;
