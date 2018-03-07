import { createStore } from 'redux';
import { colorChange } from './App';
const store = createStore (
    colorChange,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;