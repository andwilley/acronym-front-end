import React, { useReducer } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { type State } from './types/types';
import { type Action } from './actions/actionCreators';
import AcronymFinder from './components/AcronymFinder';
import StoreContext from './components/StoreContext';
import rootReducer from './reducers/rootReducer';
import { INITIAL_STATE } from './const';
import './style/flexGrid.css';

function App() {
  const store: [State, React.Dispatch<Action>] = useReducer(rootReducer, INITIAL_STATE);

  return (
    <StoreContext.Provider value={store}>
      <Header />
      <AcronymFinder />
      <Footer />
    </StoreContext.Provider>
  );
}

export default App;
