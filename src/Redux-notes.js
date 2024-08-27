// REDUX is state management libraray.
// REDUX fixes the global state management.

// Store: Holds the state.
// Actions: Describe what happened.
// Reducers: Handle state changes.
// Dispatch: Sends actions to the store.
// Provider: Makes the store available to components.
// connect: Links components to the store.

// for installation redux ==> npm i redux command
// for installation redux-redux ==> npm i react-redux command
/*  
    action: ==> informs reducer to do specific change in store/state.
    reducer: ==> is something that changes the data inside store.
*/
/*
    state => Global state (or) Store.
    
  1. Action:  it is plain javascript object. { type: "some-string" }
  2. Reducer: it is plain javascrip function that takes ( previousState & action ) then returns updated state.
  3. subscribe: it is plain javascript function that gets executed whenever there is change in state(store). it takes callback function.
  4. dispatch: When you dispatch an action, the store runs the reducer with the current state and the action to produce the new state.
*/
// Dispatch ==> takes action object.

// const reducer = function (state = { count: 10 }, action) {
//   if (action.type === "increment") {
//     return { count: state.count + 1 };
//   }
//   if (action.type === "decrement") {
//     return { count: state.count - 1 };
//   }
//   return state;
// };
// const store = legacy_createStore(reducer, composeWithDevTools());

// console.log(store.getState());
// store.dispatch({ type: "increment" });

// store.subscribe(function () {
//   console.log("subscriber");
// });

// console.log(store.getState());
// store.dispatch({ type: "decrement" });
// console.log(store.getState());

// here when disptach is called then, reducer will get excute and make changes according to action if action of type="increment" then state changes.

//              #### REACT-REDUX
/* ==> In order to avoid whole component re-renders we use REACT-REDUX.
   ==> and when state/store changes then that particular component re-renders, whole component doesn't re-renders.
   ==> In REACT-REDUX we use hooks for acheiving solution.
*/
// react-redux ==> provides
//  1.    <Provider store={store}>
//          <Age/>
//        </Provider>

//   ==>   by using provider all children components(<Age/>) can access store data.
//   ==>   it takes prop called store and we have to pass redux store for it.

//  2. react-redux provides 2 hooks
//     const dispatch = useDispatch();  ==> will give dispatch function.
//     const age = useSelector((state) => state.age) ==> we can get age value from store and can be used.
//     const age = useSelector((state) => state.age) ==> when age is changing then only useSelector line what we used gets re-render, otherwise it doesn't re-render.
//     useSelector() ==> is responsible for re-renders in redux.