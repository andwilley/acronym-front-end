import React from 'react';
import { type State } from '../types/types';
import { type Action } from '../actions/actionCreators';

const StoreContext: React.Context<[State, React.Dispatch<Action>]> = React.createContext(null);

export default StoreContext;
