# Redux
 - Store
 - Action
 - Reducer
 - Subscription
    
    ```
    store.subscribe(() => {
        console.log('[subscription]', store.getState())
    })
    ```
 - Selectors

# Redux-toolkit
 - configureStore
 - createAction
 - createReducer
 - createSlcie

    ```
      const xxxStore = createSlice({
          name: 'xxx',
          initialState: {
              xxx
          },
          reducers: {
              increment: {
                  reducer: (state, action) => {
                  },
                  prepare: (text) => {
                      return {payload: text}
                  }
              }
          }
      })
    ```

    ```
    {
        name: "todos",
        reducer: (state, action) => newState,
        actions: {
            addTodo: (payload) => ({type: "todos/addTodo", payload}),
            toggleTodo: (payload) => ({type: "todos/toggleTodo", payload})
        },
        caseReducers: {
            addTodo: (state, action) => newState,
            toggleTodo: (state, action) => newState,
        }
    }
    ```