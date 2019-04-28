import React, { useEffect, useContext } from 'react';
import InputBox from "../components/InputBox";
import OutputBox from "../components/OutputBox";
import StoreContext from "../components/StoreContext";
import { getInputText, getOutputText, getSubmitText } from '../reducers/rootReducer';
import { genericAction } from "../actions/actionCreators";
import parseJSON from "../utils/parseJSON";
import { ERROR_API_RETURN, API_BASE_URL } from '../const';

const AcronymFinder = () => {
  const [state, dispatch] = useContext(StoreContext);
  const inputText = getInputText(state);
  const outputText = getOutputText(state);
  const submitText = getSubmitText(state);
  useEffect(() => {
    (async () => {
      if (!submitText) return;
      // fetch api is not supported by older browsers...
      const json = await fetch(`http://${API_BASE_URL}/acronyms?bullets=${submitText}`)
        .then(response => response.json())
        .catch(e => ERROR_API_RETURN);
      dispatch(genericAction('setOutput', json.acronyms.length === 0 ? "" : parseJSON(json)));
    })();
  }, [submitText, dispatch]);

  return (
    <div className="flexContainer">
      <InputBox inputText={inputText} dispatch={dispatch} />
      <OutputBox outputText={outputText} dispatch={dispatch} />
    </div>
  );
};

export default AcronymFinder;
