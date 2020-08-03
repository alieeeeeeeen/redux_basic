const { configureStore, createAction, createReducer, createSlice } = require('@reduxjs/toolkit')
const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');

const rootReducer = (state = 0, action) => {
    switch(action.type) {
        case increment.type: 
            return state + 1;
        default:
            return state;
    }
}

const count = createReducer(0, {
    [increment]: state => state + 1,
    [decrement]: state => state - 1
})

const store = configureStore({reducer: count});

store.dispatch(increment())
console.log(store.getState())
store.dispatch(decrement())
console.log(store.getState())


const numberSlice = createSlice({
    name: 'number',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1
    }
})

const numberStore = configureStore({reducer: numberSlice.reducer})
console.log('number', numberStore.getState())