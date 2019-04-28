import React from 'react';
import { genericAction } from '../actions/actionCreators';

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
