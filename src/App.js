import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";
import parseJSON from "./utils/parseJSON";
import { ERROR_API_RETURN, API_BASE_URL } from "./const";
import "./style/flexGrid.css";

function App() {
  const [outputText, setOutputText] = useState("");
  const [inputText, setInputText] = useState("");
  const [submitText, setSubmitText] = useState("");
  useEffect(() => {
    (async () => {
      if (!submitText) return;
      // fetch api is not supported by older browsers...
      const json = await fetch(`http://${API_BASE_URL}/acronyms?bullets=${submitText}`)
        .then(response => response.json())
        .catch(e => ERROR_API_RETURN);
      setOutputText(json.acronyms.length === 0 ? "" : parseJSON(json));
    })();
  }, [submitText]);

  return (
    <>
      <Header />
      <div className="flexContainer">
        <InputBox inputText={inputText} setInputText={setInputText} setSubmitText={setSubmitText} />
        <OutputBox outputText={outputText} setOutputText={setOutputText} />
      </div>
      <Footer />
    </>
  );
}

export default App;
