import { createStore, combineReducers } from 'redux';
import dolarTodayReducer from '../reducers/DolarToday.jsx';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    //Store creation
    const store = createStore(
        combineReducers({
            dolarToday: dolarTodayReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );

    return store;
}