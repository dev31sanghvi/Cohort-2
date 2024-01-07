// import { useState } from "react";
// import { useEffect } from "react";

// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todos")
//       .then(async function(res) {
//         const json = await res.json();
//         setTodos(json.todos);
//       })
//   }, [])

//   return <div>
//     {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
//   </div>
// }

// function Todo({title, description}) {
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h4>
//       {description}
//     </h4>
//   </div>
// }

// export default App;



// <------>
// Writing  a component that takes a todo id as an input
// And fetches the data for that todo from the given endpoint
// And then renders it
// import { useMemo, useState } from "react";
// import { useEffect } from "react";
// import axios from 'axios';
// function App() {
//   return <div>
//     <Todo id={1} />
//   </div>
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState({});

//   // this is the useEffect implementation
//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todo?id=" + id)
//       .then(async function (res) {
//         const json = await res.json();
//         setTodo(json.todo);
//       })
//   }, [])

//   return <div>
//     <h1>
//       {todo.title}
//     </h1>
//     <h4>
//       {todo.description}
//     </h4>
//   </div>
// }

// export default App;

// <--------------->



// this is useMemo implementation
// import { useState } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [inputValue, setInputValue] = useState(1);


//   let count = 0;
//   for (let i = 1; i <= inputValue; i++) {
//     count = count + i;
//   }

  // you can use count and set count vala method also but it is not a good approach as it rerenders stuff and that should not happen

  // approach 2 (better approach)
  // let count1=useMemo(()=>{
//     console.log("this is approach 2 ")
//   });

//   return <div>
//     <input onChange={function (e) {
//       setInputValue(e.target.value);
//     }} placeholder={"Find sum from 1 to n"}></input>
//     <br />
//     Sum from 1 to {inputValue} is {count}
//     <br />
//     <button onClick={() => {
//       setCounter(counter + 1);
//     }}>Counter ({counter})</button>
//   </div>
// }

// export default App;

import { memo, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  function logSomething() {
    console.log("child clicked")
  }

  return <div>
    <Child onClick={inputFunction} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(({inputFunction}) => {
  console.log("child render")

  return <div>
    <button onClick={inputFunction}>Button clicked</button>
  </div>
})

export default App;