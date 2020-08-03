const { configureStore, createAction, createReducer, createSlice } = require('@reduxjs/toolkit')
const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');

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
    initialState: {
        value: 0
    },
    reducers: {
        incrementByValue: (state, action) => {
            console.log(action)
            state.value += action.payload
        },
        decrementByValue: (state, action) => {
            state.value -= action.payload;
        },
    }
})

const numberStore = configureStore({reducer: numberSlice.reducer})

const { incrementByValue, decrementByValue } = numberSlice.actions;

numberStore.dispatch(incrementByValue(10))
numberStore.dispatch(decrementByValue(1))

console.log('number', numberStore.getState())