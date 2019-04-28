import React from 'react';
import { genericAction } from '../actions/actionCreators';

const InputBox = ({inputText, dispatch}) => (
  <>
    <textarea
      id="inputText"
      placeholder="Enter text here."
      value={inputText}
      onChange={e => dispatch(genericAction('setInput', e.target.value))}
    />
    <input
      className="button"
      type="button"
      value="Submit"
      onClick={() => dispatch(genericAction('submitInput', inputText))}
    />
  </>
);

export default React.memo(InputBox);
