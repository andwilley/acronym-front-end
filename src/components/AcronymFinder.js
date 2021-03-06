// @flow

import React, { useEffect, useContext } from 'react';
import InputBox from '../components/InputBox';
import OutputBox from '../components/OutputBox';
import StoreContext from '../components/StoreContext';
import {
  getInputText,
  getOutputText,
  getSubmitText,
  getFetchingAcronyms
} from '../reducers/rootReducer';
import { actions } from '../actions/actionCreators';
import parseJSON from '../utils/parseJSON';
import { ERROR_API_RETURN, API_BASE_URL } from '../const';

const AcronymFinder = () => {
  const [state, dispatch] = useContext(StoreContext);
  const inputText = getInputText(state);
  const outputText = getOutputText(state);
  const submitText = getSubmitText(state);
  const isFetching = getFetchingAcronyms(state);
  useEffect(() => {
    const fetchAcronyms = async () => {
      if (!submitText) return;
      // show the loader
      dispatch(actions.setFetchingAcronyms(true));
      const json = await fetch(`http://${API_BASE_URL}/acronyms?bullets=${submitText}`)
        .then(response => response.json())
        .catch(e => ERROR_API_RETURN);
      // hide the loader
      dispatch(actions.setFetchingAcronyms(false));
      dispatch(actions.setOutputText(json.acronyms.length === 0 ? '' : parseJSON(json)));
    };

    fetchAcronyms();
  }, [submitText, dispatch]);

  return (
    <div className="flexContainer">
      <InputBox inputText={inputText} dispatch={dispatch} />
      <OutputBox outputText={outputText} isFetching={isFetching} dispatch={dispatch} />
    </div>
  );
};

export default AcronymFinder;
