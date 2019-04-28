import { NOT_FOUND } from '../const';

const parseJSON = json =>
  json.acronyms.reduce((prev, curr, index) => {
    const separator = index ? '; ' : '';
    console.log(curr.definition);
    const defs = curr.definition ? curr.definition.replace(/,/g, ', ') : NOT_FOUND;
    return `${prev}${separator}${defs} (${curr.name})`;
  }, '');

export default parseJSON;
