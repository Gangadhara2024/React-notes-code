// ES6 => MODULES: we can reuse the variables present inside one module(js file) into another module(js file).
// <script type="module" src="./num.js"></script> => if type="module" is specified, then only we should use exports and imports.

// In a module => we can export and import javascript variables.
// we export variables to use them anywhere.

//  1. Named export.
//  we should export named exports using {v1, v2, v3} from './module2.js'
//  we can have multiple name exports in place of v1, v2, v3.

//  2. Default export.
// syntax is export default component;
// there should be only one default export.

// to get all export modules we use (import * as allexports from './module.js')

/**
 *  1. React elements.
 *  2. DOM elements.
 */
//  ***##@@@ RENDERING means placing inside the UI.

// DOM elements:

// const bold = document.createElement("b");
// bold.className = "app";
// bold.innerText = "react";     // bold is DOM element.

// const app = document.getElementById("root");
// app.appendChild(bold);

// React elements: ==> these are light weight representation of actual DOM elements.
// (means React elements have only few properties of DOM elements, but not all properties).

// createElement(type, props, children);
// const bold1 = React.createElement(
//   "b",
//   { id: "app", className: "root" },
//   "gangadhar"
// );
// const container = ReactDOM.createRoot(root); // container is wrapper element which we can render any React elements.
// container.render(bold1);   // render(Reactelement) => render takes only react elements.

// #### JSX
// XML: (<tag> code </tag>) is XML structure.
// JSX:  XML like code written inside javascript file is called XML o (JSX) javacsript XML.

// const para = (
//   <p>
//     <b>bold</b>
//     <span>span ello</span>        // JSX code.
//   </p>
// );

// <button onClick={inc}>click me</button> is called as JSX.
// JSX is converted into react elements by babel.

// JSX syntax:
// const name = "hai";

// const container = (
//     <div id="xyz" className="qwed">
//         <label htmlFor={name}></label>
//         <input placeholder="hello" id={name}/>
//     </div>
// );

// to embed data into JSX we use {data}.
// Boolean, null, undefined values will not be displayed in JSX.
// for every list items we should pass prop `KEY`.

/*
   RDOM (Real DOM): This is the actual Document Object Model, the representation of the UI, that the browser renders on the screen. The Real DOM is slower to update because it involves interacting directly with the browser, which is why React uses the VDOM to minimize direct updates to the Real DOM.

   VDOM (Virtual DOM): This is an in-memory representation of the actual DOM. React uses the VDOM to keep track of changes in the UI. When you update the UI, React updates the VDOM first, then compares it with the previous version using a process called "reconciliation." This allows React to efficiently update only the parts of the actual DOM (Real DOM) that have changed.

   1. In react, all react elements will be in Tree structure( virtual DOM => VDOM1)
   2. when there is state(data) change, react will re-construct another virtual DOM tree with updated state(VDOM2).
   3. React compares the old tree (VDOM1) and new tree (VDOM2), and figures out differences this algorithm is called as diffing.
   4. after finding the differences b/w VDOM2 and RDOM, updated virtual DOM (VDOM2) will be made in sync with RDOM, this is called Reconciliation.
   5. after Reconciliation process, VDOM1 gets deleted from memory and VDOM2 will be new VDOM1. 
*/

// const root = ReactDOM.createRoot(document.getElementById("root"));

// let name = "hello",
//   age = 26;

// const incage = () => {
//   age++;
//   console.log(age);
//   root.render(getUI());
// };
// function getUI() {
//   return (
//     <div>
//       <p>{name} </p>
//       <p>{age}</p>
//       <button onClick={incage}>increment</button>
//     </div>
//   );
// }
// root.render(getUI());
// here we are updating age by clicking button, so in memeory, age is updated but not in UI.
// so to update in UI, we should render the getUI function, so to render we used render method in incage function to get UI updated.

//                       #### COMPONENTS.
// 1. Functional components.
// 2. Class components.

//  Functional components: => is Javascript function which return JSX and starts with capital letter.
// const root = ReactDOM.createRoot(document.getElementById("root"));

// const User = ({name, age}) => {
//   return (
//     <div>
//       <p>name: {name}</p>
//       <span>age: {age} </span>
//     </div>
//   );
// };

// root.render(<User/>);

// Class components:-
// const root = ReactDOM.createRoot(document.getElementById("root"));

// Counter is class component.
// class Counter extends Component { // component is from react library.
//     render() {   // render method will always return JSX in class components.
//       return <h1>class components</h1>;
//     }
//   }
//   root.render(<Counter />);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 10 };
//     console.log(this.state);
//   }
//   render() {
//     const inc = () => {
//       this.setState({ count: this.state.count + 1 });
//       console.log(this.state.count);
//     };
//     return (
//       <div>
//         <h1>class Component</h1>
//         <h3>count: {this.state.count} </h3>
//         <button onClick={inc}>increment</button>
//       </div>
//     );
//   }
// }
// root.render(<Counter name="react" age={26} />);
// we should not directly change state value like this ==> this.state.count += 10;
// here setState ==> takes count value and gives to react and after that re-render of component happens.
// when there is change in state, react will re-render the component.

//                 #### REACT LIFE CYCLE METHODS
/*
// Life cycle methods: Mounting (birth), Updating (life), Unmounting (death).
// Mounting phase => component creation phase.
// constructor(), render(), componentDidMount() ==> are lifecycle methods only in class components.

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//   render() {
//     console.log("in render");
//     return <h1>mounted</h1>;
//   }
//   componentDidMount() {
//     console.log("after component gets mounted");
//   }
// }
// export default App;
// During Mounting phase (constructor and Render) methods excutes. after component mounting, componentDidMount() will excute.

// UPdating phase: updating component can be done either by changing state of component / passing props into component.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    console.log("render");
    return (
      <div>
        <h1>class Component, {this.state.count} </h1>
        <button onClick={this.inc}>increment</button>
      </div>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);
  }
  componentDidMount() {
    console.log("after component mounted");
  }
}
export default App;
// In updating phase, render and componentDidUpdate method will execute.
// and on clicking inc btn, for every update, component gets re-render.

// Unmouting phase: component will die.
*/

// export const App = () => {
//   let count = 0;

//   const inc = () => {
//     console.log(count);
//     count++;
//     console.log(count);
//   };
//   return (
//     <div>
//       <h1> count: {count} </h1>
//       <button onClick={inc}>increment</button>
//     </div>
//   );
// };

// In above functional component the count is updated in memory, but UI is not updated with count value. so to achieve this we use Hook called useState.

//                 #### HOOKS

// Hook: is javascript function which we can use only in react components or in other functions.
/* *****  useState Hook: 
    1. takes single argument which defines initial state of component.
    2. useEffect returns 2 arrays ==> 1. stateValue 2. stateFunction
    3. stateFunction ==> takes callback also setCount( () => {})
*/

// export const App = () => {
//     const [count, setCount] = useState(10);

//     const inc = () => {
//     //   setCount(count + 1);
//       setCount((prev) => {
//         return prev + 2;
//       });
//     };
//     return (
//       <div>
//         <h1> count: {count} </h1>
//         <button onClick={inc}>increment</button>
//       </div>
//     );
//   };
// Here setCount() is function, that takes newState as argument and informs react about the update.

// LAZY initialisation: we can pass function as argument to useState() method so that it will call the callback in first render only.

// function findSum() {
//   console.log("findsum fn");
//   let sum = 0;
//   for (let i = 2; i <= 10; i += 2) {
//     sum += i;
//   }
//   return sum;
// }
// export const App = () => {
//   const [count, setCount] = useState(findSum);

//   const inc = () => {
//     // setCount(count + 5);
//   };
//   return (
//     <div>
//       <h1> count: {count} </h1>
//       <button onClick={inc}>increment</button>
//     </div>
//   );
// };
// onclicking increment btn "findsum" fn will excute only once after that it will not excute.

//                           *****  NON-PRIMITIVES as state values

// export const App = () => {
//     const [user, setUser] = useState({ name: "gangadhar", age: 26 });
//     // user = #400 memory reference.
//     const increment = () => {
//       user.age++; // #400  { name: "gangadhar", age: 26 }
//       console.log(user);
//       // setUser(user); // #400
//       setUser({ ...user }); // here we get #500 memory, so component get re-renderd.
//     };
//     return (
//       <div>
//         <h3>
//           name: {user.name} age: {user.age}
//         </h3>
//         <button onClick={increment}>increment</button>
//       </div>
//     );
//   };

// because of memory reference of object, the age is incremented in memeory but UI is not updated, so to get UI update, we pass object using spread operator{...object}, then it creates new memory then component re-renders.
// It works same for the Arrays and Objects.

//                   ***** HANDLING INPUT IN REACT ==> REACT CONTROLLED INPUTS

// export const App = () => {
//     const [name, setName] = useState("abc");

//     const changeName = (e) => {
//         const newValue = e.target.value;
//         setName(newValue);
//     }
//     return (
//       <div>
//         <input placeholder="enter name" value={name} onChange={changeName}/>
//         <button onClick={() => setName("updated input")}>update</button>
//       </div>
//     );
//   };
// By setting value attribute, we cannot modify value inside input, because they are controlled by react.

//                    ***** HOW TO PASS PROPS FROM PARENT TO CHILD COMPONENT.

// PROP-DRILLING: is sending props from one component to child/other components is PROP-DRILLING.
// const Test = ({ count, updateCount }) => {
//     const child = () => {
//       updateCount((prev) => {
//         return prev + 1;
//       });
//     };
//     return (
//       <div>
//         <h2>child component: {count} </h2>
//         <button onClick={child}>child</button>
//       </div>
//     );
//   };
//   export const App = () => {
//     const [count, setCount] = useState(10);

//     return (
//       <div>
//         <Test count={count} updateCount={setCount} />
//         <button onClick={() => setCount(count + 1)}>parent</button>
//       </div>
//     );
//   };

//              #### USEEFFECT HOOK

/* ==> Mounting, Updating, Unmounting can be achieved in useEffect hook also.
   ==> useEffect takes 2 arguments 
          1.callback function 2. Dependency list. 
   ==> useEffect do not return anything.
*/
// ==> useEffect(function, []) ==> acts as componentDidMount ==> after component mounts, useEffect console statement will excute.

// export const App = () => {
//   const [count, setCount] = useState(10);
//   useEffect(() => {
//     console.log("effected");
//   }, []);

//   return (
//     <div>
//       <h2>useeffect app</h2>
//       <h1>count: {count} </h1>
//       <button onClick={() => setCount((p) => p + 1)}>click</button>
//     </div>
//   );
// };

// ==> useEffect(function, [a,b,c]) ==> acts as componentDidUpdate ==> if Dependency array value changes, then useEffect callback gets excuted.
// If Dependency array value same as previous, then useEffect callback will not gets excuted.
// when there is change in dependency list, then useEffect callback gets excutes.

// let x = 20;
// export const App = () => {
//   const [count, setCount] = useState(10);
//   useEffect(() => {
//     console.log("effect excutes");
//   }, [x]);

//   return (
//     <div>
//       <h2>useeffect app</h2>
//       <button onClick={() => x++}>effect x++</button>
//       <button onClick={() => setCount((p) => p + 1)}>click</button>
//     </div>
//   );
// };

// ==> useEffect(function)  ==> mixture of componentDidMount + componentDidUpdate ==> for every change useEffect gets excuted.

// export const App = () => {
//     const [count, setCount] = useState(10);
//     useEffect(() => {
//       console.log("effect excutes");
//     });

//     return (
//       <div>
//         <h2>useeffect app</h2>
//         <button onClick={() => setCount((r) => r + 1)}>effect x++</button>
//         <button onClick={() => setCount((p) => p + 1)}>click</button>
//       </div>
//     );
//   };

// const Childone = () => {
//   useEffect(() => {
//     console.log("inside effect");

//     return function () {
//       console.log("clean up function");
//     };
//   }, []);
//   return (
//     <div style={{ padding: "10px", backgroundColor: "tomato" }}>
//       <h2>child one</h2>
//     </div>
//   );
// };
// export const App = () => {
//   const [toggle, setToggle] = useState(true);
//   return (
//     <div>
//       <h2>parent one</h2>
//       {toggle && <Childone />}
//       <button onClick={() => setToggle(!toggle)}>toggle childone</button>
//     </div>
//   );
// };
// useEffect callback ==> is also called as effect/side effect.
// useEffect callback ==> can return nothing or return function expression.
// The returned function expression is called as "clean up / disposer function".
// whenever child component dies(unmount), then disposer function gets executed.

// navigator.geolocation.getCurrentPosition();  => this function fetches geolocation.
// this function takes 3 callbacks / 1. success callback / 2. error callback / 3. options

// SASS ==> is pre-processor for css.
// @import './styles.scss' ==> we can import sass file like this.
// In sass, we can create variables, they start with dollar($) sign, ($bgcolor: rgb(206, 148, 61)).
// In sass, we use Mixins called as functions.

// $bgcolor: rgb(206, 148, 61);

// @mixin rowItem($direction, $gap, $backgroundcolor) {
//   display: flex;
//   flex-direction: $direction;
//   gap: $gap;
//   background-color: $backgroundcolor;
// }

// .app {
//   background-color: $bgcolor;
//   border: 1px solid red;
//   button {
//     padding: 5px;
//     background-color: antiquewhite;
//     border: none;
//     &:hover {
//       background-color: rgb(80, 74, 72);
//       border-radius: 10px;
//       color: white;
//     }
//   }
//   .todo {
//     margin: 20px;
//     @include rowItem(column, 20px, rgb(139, 106, 96));
//   }
// }

// @@@@ AXIOS example
// for installation ==> { npm i axios } is command.

// import axios from "axios";
// import React, { useEffect } from "react";

// const AxiosExample = () => {
//   const pincodeInfo = async () => {
//     try {
//       const Response = await axios({
//         url: `https://api.postalpincode.in/pincode/${531055}`,
//         method: "POST",
//         params: {
//           name: "gangadhar",
//           age: 26,
//         },
//       });
//       console.log(Response);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     pincodeInfo();
//   }, []);
//   return <div></div>;
// };

// export default AxiosExample;

// // Axios => by using Axios request/Response handling is easy. we use AXIOS instead of FETCH method.
// // axios.get(); => will give get request.
// // axios.post(); => will give post request.
// // axios.delete(); => will give delete request.

//                    #### USEREF HOOK

// useRef => useref({}); is syntax.

// let arr = [];

// function App() {
//   const [count, setCount] = useState(10);

//   // const obj = { name: "gangadhar" };
//   const obj = useRef({ name: "gangadhar", age: 26 });
//   arr.push(obj);

//   if (arr.length === 2) {
//     console.log(arr[0], arr[1]);
//     console.log(arr[0] === arr[1]); here we get memory reference changing on component mounts, so we use useRef to get same memory reference. but by using useRef hook we can have same memory reference of obj.

//     // useRef({ name: "gangadhar" }) ==> and it will return object with name as current {current: { name: "gangadhar" }}
//     // useRef => is used to maintain single memory references, if multiple re-render of component happens.
//        useRef => creates object in 1st render of component and gives same object across all other re-renders.

//     // 1st render => #200 => useRef() => {current: { name: "gangadhar", age: 26 }}
//     // 2nd render => #200
//     // 3rd render => #200... so on .....
//   }

//   return (
//     <>
//       <h1>count: {count} </h1>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </>
//   );
// }
// export default App;

// const App = () => {
//    const [count, setCount] = useState(10);

//    let user = useRef({ name: "hellos", age: 26 });
//    const btnRef = useRef(null);

//    const increment = () => {
//      user.current.age++;
//      console.log(user);
//    };

//    useEffect(() => {
//      console.log(btnRef);
//      console.log(btnRef.current.innerText);
//      btnRef.current.innerText = "increment changed";
//    }, []);

//    return (
//      <div>
//        <p>
//          Name: {user.current.name} , age: {user.current.age}
//        </p>
//        <h1>count: {count} </h1>
//        <button ref={btnRef} onClick={increment}>
//          increment
//        </button>
//        <button onClick={() => setCount(count + 1)}>click me</button>
//      </div>
//    );
//  };
//  export default App;

// initially (btnRef = null), after component gets mounted, same reference is getting after component mounted in useEffect.
// here we passed btnRef to increment button, so it will get same reference as in null initially.

// using useRef, we can get reference of HTML elememts after component gets mounted.
// by giving prop as ref={btnRef} we can get button element and its properties.
// when component gets mounted then btn text gets updated.

//              ##### useCONTEXT HOOK

// useCONTEXT HOOK: ==> used in place of props drilling to get data from parent to child components.
// first we create ==>

//  * const Countercontext = createContext();
//  * then to use createContext() ==> we have
//  * <Countercontext.Provider value={{name: "hello", age: 26}}>
//  *      <h1>App component</h1>
//         <h3>count: {count}</h3>
//  * <Countercontext.Provider/>  ==> now we can serve this data {name: "hello", age: 26} to children inside provider  i.e <h1>App component</h1>
//                                                                                                                  <h3>count: {count}</h3>
//  * To use this data into other component we use useContext(Countercontext); Hook and pass Countercontext to it.
//  * then we can use values inside other components as in example.

// const counterContext = createContext();

// const A = () => {
//   const { name, age } = useContext(counterContext);
//   return (
//     <div className="box">
//       <h1>inside A component</h1>
//       <p>
//         Name: {name} age: {age}
//       </p>
//       <button>increment</button>
//     </div>
//   );
// };

// const B = () => {
//   const user = useContext(counterContext);
//   return (
//     <div className="box">
//       <h1>inside B component</h1>
//       <p>
//         Name: {user?.name} Age: {user?.age}
//       </p>
//       <button>decrement</button>
//     </div>
//   );
// };

// export const Main = () => {
//   const [count, setCount] = useState(10);
//   return (
//     <div className="box">
//       <counterContext.Provider value={{ name: "gangadhar", age: 26 }}>
//         <h1>App component</h1>
//         <h3>count: {count}</h3>
//         <A />
//         <B />
//       </counterContext.Provider>
//     </div>
//   );
// };

// If 'A' component is outside provider, then useContext returns default value i.e (createContext("abcd")). if "abcd" is not there then it is undefined"

// const counterContext = createContext();

// const A = () => {
//   const { count, setCount } = useContext(counterContext);
//   const increment = () => {
//     setCount((p) => p + 1);
//   };
//   return (
//     <div className="box">
//       <h1>inside A component</h1>
//       <h2>count: {count} </h2>
//       <button onClick={increment}>increment</button>
//     </div>
//   );
// };

// const B = () => {
//   const { count, setCount } = useContext(counterContext);
//   const decrement = () => {
//     setCount((p) => p - 1);
//   };
//   return (
//     <div className="box">
//       <h1>inside B component</h1>
//       <h2>count: {count} </h2>
//       <button onClick={decrement}>decrement</button>
//     </div>
//   );
// };

// export const Main = () => {
//   const [count, setCount] = useState(10);
//   return (
//     <div className="box">
//       <counterContext.Provider value={{ count, setCount }}>
//         <h1>App component</h1>
//         <h3>count: {count}</h3>
//         <A />
//         <B />
//       </counterContext.Provider>
//     </div>
//   );
// };
// here without passing count in provider, we can get count by setCount((p) => p - 1)

//            #### useMEMO.

// useMemo ==> syntax is same as useEffect();
// export const Main = () => {
//   const sum = useMemo(() => {
//     let sum = 0;
//     for (let i = 1; i < 1000; i++) {
//       sum += i;
//     }
//     return sum;
//   }, []);
//   return (
//     <div className="box">
//       <p>sum: {sum} </p>
//     </div>
//   );
// };
// inside useMemo, the callback will be excuted only once, if dependency array changes then it will excute again.
// useEffect callback gets excutes after mounting, useMemo callback gets excutes during mounting.

// USEMEMO and MEMO is different.
// MEMO is not a HOOK it is a function.

// const A = memo(({ a }) => {
//   console.log("A rendered");
//   return (
//     <div>
//       <p>inside A comp</p>
//       <h3>value of A : {a} </h3>
//     </div>
//   );
// });
// export const Main = () => {
//   console.log("memo-example rendered");
//   const [toggle, setToggle] = useState(true);
//   return (
//     <div className="box">
//       <A a={10} />
//       <button onClick={() => setToggle(!toggle)}>
//         Re- render memo-example
//       </button>
//     </div>
//   );
// };
// in this case without any change in value of a={10} , component re-renders, to avoid that we use memo.
// when there is prop change, then A component renders otherwise, A component will not re-render.

//               #### ROUTING

// {
//   /* <BrowserRouter>
//        <Routes>
//           <Route path="home" element={<h2>home page</h2>} />
//        </Routes>
//     </BrowserRouter>; */
// }

// #### Dynamic Routing.

// <Route path="product/:abc" element={<h2>product view</h2>} /> here :abc means dynamic routing, we can give any value in place of abc here.
// useNavigator => hook in router ==> we can directly give navigator(/home) it will redirect to home page.
// useParams => hook will give us the parameters like http://localhost:3000/home/:about/2431/2323 it will give 2431/2323 as id's.
// <outlet/> ==> gives the nested routing.
/* useLocation() hook ==> gives which route is active. we can give styling
       style={{color: location.pathname === "/user/home" ? "red" : "black"}}
       style={{fontWeight: location.pathname === "/user/home" ? "900" : "100",}}
*/
/* <NavLink></NavLink> is same as Link, it takes callback function and we can give style
       className={({ isActive }) => (isActive ? "active-link" : "link")}
*/
/* LAZY LOADING: ==> takes callback as lazy(() => import("./Movies.js")) and it loads when movies component loads or when we click.
                     when we click on movies link, then movies component is called other wise it is not called.
                     by using lazy loading, seperate chunk file is created and that component is loaded.
            <Route
              path="movies"
              element={
                <Suspense fallback={<b>movies loading ....</b>}>
                  <Movies />
                </Suspense>
              }
            />
*/
