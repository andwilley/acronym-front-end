import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";
import parseJSON from "./utils/parseJSON";
import { ERROR_API_RETURN } from "./const";
import "./style/flexGrid.css";

function App() {
  const [outputText, setOutputText] = useState("");
  const [inputText, setInputText] = useState("");
  const [submitText, setSubmitText] = useState("");
  useEffect(() => {
    (async () => {
      const url = process.env.REACT_APP_API_BASE_URL || "localhost";
      // fetch api is not supported by older browsers...
      const json = await fetch(`http://${url}/acronyms?bullets=${submitText}`)
        .then(response => response.json())
        .catch(e => ERROR_API_RETURN);
      setOutputText(json.acronyms.length === 0 ? "" : parseJSON(json));
    })();
  }, [submitText]);

  return (
    <>
      <h1>Aloha Spark Acronym Tool!</h1>
      <div className="flexContainer">
        <InputBox inputText={inputText} setInputText={setInputText} setSubmitText={setSubmitText} />
        <OutputBox outputText={outputText} setOutputText={setOutputText} />
      </div>
      <Footer />
    </>
  );
}

export default App;
