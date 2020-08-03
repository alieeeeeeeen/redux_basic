const redux = require('redux');
const createStore = redux.createStore;

// state
const initialState = {
    counter: 0
}

// reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC') {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
}

// store
const store = createStore(rootReducer);

// subscription
store.subscribe(() => {
    console.log('[subscription]', store.getState());
})


store.dispatch({type: 'INC'})
console.log(store.getState())

store.dispatch({type: 'ADD', value: 10})
console.log(store.getState())
