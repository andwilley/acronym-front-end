export const NOT_FOUND = 'Acronym not found';
export const ERROR_API_RETURN = { acronyms: [{ name: 'error', definition: 'request failed' }] };
export const API_BASE_URL = (() => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return 'acronym-web-app-acronym.192.168.42.157.nip.io/';
    case 'development':
      return 'localhost:8080';
    case 'test':
      return 'localhost:8080';
    default:
      return 'localhost';
  }
})();

export const INITIAL_STATE = {
  inputText: '',
  outputText: '',
  submitText: ''
};
