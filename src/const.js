export const NOT_FOUND = 'Acronym not found';
export const ERROR_API_RETURN = { acronyms: [{ name: 'error', definition: 'request failed' }] };
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'localhost:8080';

export const INITIAL_STATE = {
  inputText: '',
  outputText: '',
  submitText: ''
};
