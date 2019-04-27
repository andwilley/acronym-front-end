import React from 'react';

const OutputBox = ({outputText, setOutputText}) => (
  <>
    <textarea id="outputText" value={outputText} />
    <input className="button" type="button" value="Clear" onClick={() => setOutputText("")} />
  </>
);

export default OutputBox;
