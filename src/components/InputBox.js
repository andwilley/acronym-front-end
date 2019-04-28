import React from 'react';

const InputBox = ({inputText, setInputText, setSubmitText}) => (
  <>
    <textarea
      id="inputText"
      placeholder="Enter text here."
      value={inputText}
      onChange={e => setInputText(e.target.value)}
    />
    <input
      className="button"
      type="button"
      value="Submit"
      onClick={() => setSubmitText(inputText)}
    />
  </>
);

export default React.memo(InputBox);
