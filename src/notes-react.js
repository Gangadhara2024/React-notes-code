// ES6 => MODULES: we can reuse the variables present inside one module(js file) into another module(js file).
// <script type="module" src="./num.js"></script> => if type="module" is specified then only we should use exports and imports.

// In a module => we can export and import javascript variables.
// we export variables to use them anywhere.

//  1. Named export.
//  we shouls export named exports using {v1, v2, v3} from './module2.js'
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
// bold.innerText = "hello";     // bold is DOM element.

// const app = document.getElementById("root");
// app.appendChild(bold);

// React elements: these are light weight representation of actual DOM elements.

// createElement(type, props, children);
// const bold1 = React.createElement(
//   "b",
//   { id: "app", className: "root" },
//   "gangadhar"
// );
// const container = ReactDOM.createRoot(root); // container is wrapper element which we can render any React elements.
// container.render(bold1);   // render(Reactelement)

// #### JSX
// XML: <tag> code </tag> is XML structure.
// JSX:  XML like code written inside javascript file is called XML or (JSX) javacsript XML.

// const para = (
//   <p>
//     <b>bold</b>
//     <span>span ello</span>        // JSX code.
//   </p>
// );

// <button onClick={inc}>click me</button> is called as JSX.
// JSX is converted into react elements by babel.

// JSX syntax.

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
   RDOM : virtual DOM means HTML elements.
   VDOM : Real DOM (have memory).

   1. In react all react elements will be in Tree structure( virtual DOM => VDOM1)
   2. when there is state(data) change, react will re-construct another virtual DOM tree with updated state(VDOM2).
   3. React compares the old tree (VDOM1) and new tree (VDOM2), and figures out differences this algorithm is called as diffing.
   4. after finding the differences, updated virtual DOM (VDOM2) will be made in sync with RDOM, this is called Reconciliation. 
*/

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

//  Class components:

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // Counter is class component.
// class Counter extends Component { // component is from react library.
//     render() {   // render method will always return JSX in class components.
//       return <h1>class components</h1>;
//     }
//   }
//   root.render(<Counter />);

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
// During Mounting phase constructor and Render methods excutes. after component mounting componentDidMount() will excute.

// UPdating phase: updating component can be done either by changing state of component / passing props into component.

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }
//    increment = () => {
//      this.setState({count: this.state.count + 1})
//   }
//   render() {
//     console.log("in render");
//     return (
//       <div>
//         <h3>class compoenent</h3>
//         <button onClick={this.increment}>increment</button>
//       </div>
//     )
//     ;
//   }
//   componentDidMount() {
//     console.log("after component gets mounted");
//   }
// }
// export default App;
// componentDidMount() method ==> gets excutes only when component is mounted.
// render() method ==> gets excuted in Updating phase.

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

// In above functional component the count is updated in memory but UI is not updated with count value. so to achieve this we use Hook called useState.

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

// LAZY initialisation: we can pass function as argument to useState() method so that it will call the callback in first render only.

function findSum() {
  console.log("findsum fn");
  let sum = 0;
  for (let i = 2; i <= 10; i += 2) {
    sum += i;
  }
  return sum;
}
export const App = () => {
  const [count, setCount] = useState(findSum);

  const inc = () => {
    // setCount(count + 5);
  };
  return (
    <div>
      <h1> count: {count} </h1>
      <button onClick={inc}>increment</button>
    </div>
  );
};
// onclicking uncrement btn "findsum fn" will excute only once after that it will not excute.
