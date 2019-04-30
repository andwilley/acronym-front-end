import React from 'react';
import { genericAction } from '../actions/actionCreators';

/**
 * Display and allow use to clear the returned definitions of acronyms.
 * @param {string} outputText The returned text with acronyms defined.
 * @param {function} dispatch Dispatch function from useReducer.
 */
const OutputBox = ({ outputText, dispatch }) => (
  <>
    <textarea id="outputText" value={outputText} />
    <input
      className="button"
      type="button"
      value="Clear"
      onClick={() => dispatch(genericAction('setOutput', ''))}
    />
  </>
);

export default React.memo(OutputBox);
