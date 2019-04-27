const parseJSON = json =>
  json.acronyms.reduce((prev, curr, index) => {
    const separator = index ? "; " : "";
    const defs = curr.definition ? curr.definition.replace(",", ", ") : "Not Found";
    return `${prev}${separator}${defs} (${curr.name})`;
  }, "");

export default parseJSON;
