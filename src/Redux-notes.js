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

const initialstate = {
  count: 10,
  value: 2,
};
const counterReducer = (state = initialstate, action) => {
  if (action.type === "inc") {
    const incCount = action.payload;
    return { ...state, count: state.count + incCount };
  }
  return state;
};
const cityReducer = (state = { info: "null" }, action) => {
  if (action.type === "fetched_data") {
    return { ...state, info: action.payload };
  }
  return state;
};

const rootReducer = combineReducers({
  counter: counterReducer,
  city: cityReducer,
});
const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;

// By using redux middleware we can have asynchronous code to run with certain time, so we use middleware.
// Redux-thunk => gives us middleware functionality for redux store.
// by default dispatch function always takes action object as argument as {type: "inc", payload: optional}
// once we integrate middleware(redux-thunk) => we can pass function as argument to dispatch method.
// normal dispatch =>  dispatch({type: "inc"})
// with middleware dispatch =>  dispatch(() => {})

// asyncInc Count is a middleware.
// middleware function(asyncIncrementCount) => gets 2 callbacks (1. dispatch function 2. getState.)

/*
  A middleware can do anything it wants when it sees a dispatched action:
  
  Log something to the console
  Set timeouts
  Make asynchronous API calls
  Modify the action
  Pause the action or even stop it entirely
   */

// combineReducers: ==> can combine reducers as
/**
    const rootReducer = combineReducers({
    counter: counterReducer,
    city: cityReducer,
    });
 */

// for Redux Toolkit installation we use npm i @reduxjs/toolkit.

const delay = () => {
  return new Promise((res) => {
    setTimeout(res, 3000);
  });
};

export const asyncIncCount = async (dispatch, getState) => {
  await delay();
  console.log(getState());
  dispatch({ type: "inc", payload: 5 });
};

export const fetchpostOffice = async (dispatch, getState) => {
  try {
    const response = await fetch("https://api.postalpincode.in/pincode/531055");
    const data = await response.json();
    dispatch({ type: "fetched_data", payload: data });
  } catch (err) {}
};

const Citysearch = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const postOffices = useSelector((state) => state.city.info);
  // console.log(postOffices);

  useEffect(() => {
    dispatch(fetchpostOffice);
  }, []);
  return (
    <div>
      <input
        placeholder="search post offices"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <ul>
        {postOffices
          .filter(
            (postOffice) =>
              postOffice.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1
          )
          .map((postOffice) => (
            <li>{postOffice.Name}</li>
          ))}
      </ul> */}
    </div>
  );
};
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const inc = () => {
    dispatch(asyncIncCount);
  };
  return (
    <div>
      <h1>count: {count} </h1>
      <button onClick={inc}>increment</button>
    </div>
  );
};
export const Middleware = () => {
  return (
    <Provider store={store}>
      <>
        <Counter />
        <Citysearch />
      </>
    </Provider>
  );
};
