// @flow

export type State = {
  outputText: string,
  inputText: string,
  submitText: string,
  fetchingAcronyms: boolean
};

export type AcronymApiJson = {
  acronyms: [
    {
      name: string,
      definition: string
    }
  ]
};
