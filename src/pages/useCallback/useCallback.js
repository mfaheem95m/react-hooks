"use strict";
import React, { useState, useEffect, useCallback, useContext } from "react";
import "../../style/Home.css";
import UserDetail from "./UserDetail";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState({ value: 1 });

  const onIncrement = () => {
    setCount((count) => count + 1);
  };
  const onSetUserData = useCallback(() => {
    console.log("run again _____");
    setUserData((user) => ({ value: user.value + 1 }));
  }, []);

  return (
    <div className="Home">
      <header className="description">
        <p>
          useCallback is a React Hook that lets you cache a function definition
          between re-renders.
        </p>
        <button className="my-button" onClick={onIncrement}>
          incrementCount
        </button>
        <p>Count : {count}.</p>
        <UserDetail onSetUserData={onSetUserData} userData={userData} />
        <h3>Case 1</h3>
        <h4>Skipping re-rendering of components</h4>
        <p className="text">
          when our goal is to optimize the performance then we will cache the
          function that we will pass to a child component. to cache a function
          between rerenders we need wrap that function in a useCallback hook.
          you need to pass two things to useCallback hook one is function that
          we want to cache during rerender and the second one is dependency
          array. on itital render it returned the cached function then on the
          onward render it compares the dependencies that we passed with the
          previous render if none of the dependency would change then
          useCallback would return the same function as before. In JavaScript, a
          function () {} or () =&gt; {} always creates a different function,
          similar to how the {} object literal always creates a new object.
          Normally, this wouldn’t be a problem, but it means that ShippingForm
          props will never be the same, and your memo optimization won’t work.
          <br />
          <br />
          useCallback caches the function itself.
          <br />
          <br />
          useMemo caches the result of calling your function.
        </p>
        <h3>Case 2</h3>
        <h4>Drawbacks of Overuse:</h4>
        <p className="text">
          Increased complexity: Excessive use can make your code harder to read
          and maintain. Ineffectiveness: Memoization can break if the function
          is always treated as new due to changing values.
        </p>
        <h3>Case 3</h3>
        <h4> Best Practices:</h4>
        <p className="text">
          Use JSX children in wrapper components to prevent unnecessary
          re-renders of child components.
          <br />
          Keep state localized; avoid lifting transient state too high up in the
          component tree.
          <br />
          Maintain pure rendering logic to minimize bugs that might appear as
          performance issues.
          <br />
          Minimize unnecessary effects and dependencies, often simplifying the
          logic is more effective than adding memoization.
          <br />
        </p>

        {/* New Use Cases Added Below */}

        <h3>Use Case 1: Updating State from a Memoized Callback</h3>
        <p className="text">
          Sometimes, you might need to update state based on previous state from
          a memoized callback. This <code>handleAddTodo</code> function
          specifies <code>todos</code> as a dependency because it computes the
          next todos from it:
        </p>
        <pre>
          {`const handleAddTodo = useCallback((text) => {
  const newTodo = { id: nextId++, text };
  setTodos([...todos, newTodo]);
}, [todos]);`}
        </pre>
        <p className="text">
          You’ll usually want memoized functions to have as few dependencies as
          possible. When you read some state only to calculate the next state,
          you can remove that dependency by passing an updater function instead:
        </p>
        <pre>
          {`const handleAddTodo = useCallback((text) => {
  const newTodo = { id: nextId++, text };
  setTodos(todos => [...todos, newTodo]);
}, []); // ✅ No need for the todos dependency`}
        </pre>

        <h3>Use Case 2: Preventing an Effect from Firing Too Often</h3>
        <p className="text">
          Sometimes, you might want to call a function from inside an Effect. If
          you declare <code>createOptions</code> as a dependency, it will cause
          your Effect to constantly reconnect:
        </p>
        <pre>
          {`useEffect(() => {
  const options = createOptions();
  const connection = createConnection(options);
  connection.connect();
  return () => connection.disconnect();
}, [createOptions]); // 🔴 Problem: This dependency changes on every render`}
        </pre>
        <p className="text">
          To solve this, wrap the function you need to call from an Effect into{" "}
          <code>useCallback</code>:
        </p>
        <pre>
          {`const createOptions = useCallback(() => {
  return {
    serverUrl: 'https://localhost:1234',
    roomId: roomId
  };
}, [roomId]);`}
        </pre>

        <h3>Use Case 3: Optimizing a Custom Hook</h3>
        <p className="text">
          If you’re writing a custom Hook, it’s recommended to wrap any
          functions that it returns into <code>useCallback</code>:
        </p>
        <pre>
          {`function useRouter() {
  const { dispatch } = useContext(RouterStateContext);
  
  const navigate = useCallback((url) => {
    dispatch({ type: 'navigate', url });
  }, [dispatch]);

  const goBack = useCallback(() => {
    dispatch({ type: 'back' });
  }, [dispatch]);

  return { navigate, goBack };
}`}
        </pre>

        <h3>Troubleshooting</h3>
        <p className="text">
          If you find that every time your component renders,{" "}
          <code>useCallback</code> returns a different function, make sure
          you’ve specified the dependency array as a second argument! If you
          forget the dependency array, <code>useCallback</code> will return a
          new function every time:
        </p>
        <pre>
          {`const handleSubmit = useCallback((orderDetails) => {
  post('/product/' + productId + '/buy', {
    referrer,
    orderDetails,
  });
}); // 🔴 Returns a new function every time: no dependency array`}
        </pre>
        <p>
          This is the corrected version passing the dependency array as a second
          argument:
        </p>
        <pre>
          {`const handleSubmit = useCallback((orderDetails) => {
  post('/product/' + productId + '/buy', {
    referrer,
    orderDetails,
  });
}, [productId, referrer]); // ✅ Does not return a new function unnecessarily`}
        </pre>

        <h3>Handling useCallback in Loops</h3>
        <p className="text">
          Suppose the Chart component is wrapped in memo. You want to skip
          re-rendering every Chart in the list when the ReportList component
          re-renders. However, you can’t call <code>useCallback</code> in a
          loop:
        </p>
        <pre>
          {`function ReportList({ items }) {
  return (
    <article>
      {items.map(item => {
        // 🔴 You can't call useCallback in a loop like this:
        const handleClick = useCallback(() => {
          sendReport(item);
        }, [item]);

        return (
          <figure key={item.id}>
            <Chart onClick={handleClick} />
          </figure>
        );
      })}
    </article>
  );
}`}
        </pre>
        <p className="text">
          Instead, extract a component for an individual item, and put{" "}
          <code>useCallback</code> there:
        </p>
        <pre>
          {`function ReportList({ items }) {
  return (
    <article>
      {items.map(item => <Report key={item.id} item={item} />)}
    </article>
  );
}

const Report = memo(({ item }) => {
  const handleClick = useCallback(() => {
    sendReport(item);
  }, [item]);

  return (
    <figure>
      <Chart onClick={handleClick} />
    </figure>
  );
});`}
        </pre>
      </header>
    </div>
  );
}

export default UseCallback;
