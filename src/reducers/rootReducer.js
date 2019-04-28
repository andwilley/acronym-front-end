const rootReducer = (state, action) => {
    switch(action.type) {
        case 'setOutput':
            return {
                ...state,
                outputText: action.payload,
            };
        case 'setInput':
            return {
                ...state,
                inputText: action.payload,
            };
        case 'submitInput':
            return {
                ...state,
                submitText: action.payload,
            };
        default:
            return state;
    }
}

export default rootReducer;

export const getOutputText = (state) => state.outputText;
export const getInputText = (state) => state.inputText;
export const getSubmitText = (state) => state.submitText;
