// @flow

import { type State } from '../types/types';
import { type Action } from '../actions/actionCreators';

const rootReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setOutputText':
      return {
        ...state,
        outputText: action.payload
      };
    case 'setInputText':
      return {
        ...state,
        inputText: action.payload
      };
    case 'setSubmitText':
      return {
        ...state,
        submitText: action.payload
      };
    case 'fetchingAcronyms':
      return {
        ...state,
        fetchingAcronyms: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;

// Selectors

export const getOutputText = (state: State) => state.outputText;
export const getInputText = (state: State) => state.inputText;
export const getSubmitText = (state: State) => state.submitText;
export const getFetchingAcronyms = (state: State) => state.fetchingAcronyms;
