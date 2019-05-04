// @flow

// action types

type GenericAction<T, P = empty, M = empty> = {
  type: T,
  payload: P,
  meta?: M
};

type SetOutputTextAction = GenericAction<'setOutputText', string>;
type SetInputTextAction = GenericAction<'setInputText', string>;
type SetSubmitTextAction = GenericAction<'setSubmitText', string>;
type SetFetchingAcronymsAction = GenericAction<'fetchingAcronyms', boolean>;

// action creators

export const actions = {
  setOutputText: function(payload: string): SetOutputTextAction {
    return {
      type: 'setOutputText',
      payload
    };
  },
  setInputText: function(payload: string): SetInputTextAction {
    return {
      type: 'setInputText',
      payload
    };
  },
  setSubmitText: function(payload: string): SetSubmitTextAction {
    return {
      type: 'setSubmitText',
      payload
    };
  },
  setFetchingAcronyms: function(payload: boolean): SetFetchingAcronymsAction {
    return {
      type: 'fetchingAcronyms',
      payload
    };
  }
};

export type Action =
  | SetOutputTextAction
  | SetInputTextAction
  | SetSubmitTextAction
  | SetFetchingAcronymsAction;
