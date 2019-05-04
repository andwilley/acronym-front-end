import React from 'react';
import { actions, type Action } from '../actions/actionCreators';

type InputBoxProps = {
  inputText: string,
  dispatch: React.Dispatch<Action>
};

/**
 * Manage the users text input, save entire text for submission on click.
 * @param inputText Controlled text in the input textarea
 * @param dispatch Dispatch function from useReducer
 */
const InputBox = ({ inputText, dispatch }: InputBoxProps): React.Node => (
  <>
    <textarea
      id="inputText"
      placeholder="Enter text here."
      value={inputText}
      onChange={e => dispatch(actions.setInputText(e.target.value))}
    />
    <input
      className="button"
      type="button"
      value="Submit"
      onClick={() => dispatch(actions.setSubmitText(inputText))}
    />
  </>
);

export default React.memo(InputBox);
