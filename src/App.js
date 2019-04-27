import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";
import parseJSON from "./utils/parseJSON";
import "./style/flexGrid.css";

function App() {
  const [outputText, setOutputText] = useState("");
  const [inputText, setInputText] = useState("");
  const [submitText, setSubmitText] = useState("");
  useEffect(() => {
    (async () => {
      const url = process.env.REACT_APP_API_BASE_URL || 'localhost';
      // this error isn't handled if fetch fails
      const result = await fetch(`http://${url}/acronyms?bullets=${submitText}`);
      const json = await result.json();
      let output = json.acronyms.length > 0 ? parseJSON(json) : "";
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
