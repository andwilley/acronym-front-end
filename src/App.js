import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";
import parseJSON from "./utils/parseJSON";
import { asyncTryCatch } from "./utils/functional";
import { ERROR_API_RETURN, ERROR } from "./const";
import "./style/flexGrid.css";

function App() {
  const [outputText, setOutputText] = useState("");
  const [inputText, setInputText] = useState("");
  const [submitText, setSubmitText] = useState("");
  useEffect(() => {
    (async () => {
      const url = process.env.REACT_APP_API_BASE_URL || "localhost";
      const attempt = await asyncTryCatch(() =>
        fetch(`http://${url}/acronyms?bullets=${submitText}`)
      );
      const result = attempt.fold(e => ERROR, c => c);
      const json = result !== ERROR ? await result.json() : ERROR_API_RETURN;
      let output = json.acronyms.length === 0 ? "" : parseJSON(json);
      console.log(output);
      setOutputText(output);
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
