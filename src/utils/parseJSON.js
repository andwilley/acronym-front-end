// @flow

import { NOT_FOUND } from '../const';
import { type AcronymApiJson } from '../types/types';

const parseJSON = (json: AcronymApiJson): string =>
  json.acronyms.reduce((prev, curr, index) => {
    const separator = index ? '; ' : '';
    const defs = curr.definition ? curr.definition.replace(/,/g, ', ') : NOT_FOUND;
    return `${prev}${separator}${defs} (${curr.name})`;
  }, '');

export default parseJSON;
