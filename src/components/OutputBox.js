import React from 'react';
import { actions } from '../actions/actionCreators';
import { type Action } from '../actions/actionCreators';
import { WAITING_TEXT } from '../const';

type OutPutBoxProps = {
  outputText: string,
  isFetching: boolean,
  dispatch: React.Dispatch<Action>
};

/**
 * Display and allow use to clear the returned definitions of acronyms.
 * @param outputText The returned text with acronyms defined.
 * @param dispatch Dispatch function from useReducer.
 */
const OutputBox = ({ outputText, isFetching, dispatch }: OutPutBoxProps): React.Node => (
  <>
    <textarea id="outputText" value={isFetching ? WAITING_TEXT : outputText} />
    <input
      className="button"
      type="button"
      value="Clear"
      onClick={() => dispatch(actions.setOutputText(''))}
    />
  </>
);

export default React.memo(OutputBox);
