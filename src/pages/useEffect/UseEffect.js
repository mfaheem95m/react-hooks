import React, { useState, useEffect } from "react";
import "../../style/Home.css";
function UseEffect() {
  const [version, setVersion] = useState(0);

  useEffect(() => {
    console.log("hello world");
    return () => {
      console.log("cleanup");
    };
  }, [version]);
  return (
    <div className="Home">
      <header className="description">
        <p>
          useEffect is a React Hook that lets you synchronize a component with
          an external system.
        </p>
        <h3>Description</h3>
        <p className="text">
          Parameters :
          <br />
          setup: The function with your Effect’s logic. Your setup function(that
          connects to that external system) may also optionally return a cleanup
          function (that disconnect to that external system). When your
          component is added to the DOM, React will run your setup function.
          After every re-render with changed dependencies, React will first run
          the cleanup function (if you provided it) with the old values, and
          then run your setup function with the new values. After your component
          is removed from the DOM, React will run your cleanup function.Second
          one would be dependency array .
          <br />
          To help you find bugs, in development React runs setup and cleanup one
          extra time before the setup.This is a stress-test that verifies your
          Effect’s logic is implemented correctly. <br />
          If you’re not connecting to any external system, you probably don’t
          need an Effect.
          useEffect returns undefined.
        </p>

        <button
          className="my-button"
          onClick={() => setVersion((ver) => ver + 1)}
        >
          version
        </button>
        <h3>version no is {version}</h3>
        <h3>Case 1</h3>
        <h4>Wrapping Effects in custom Hooks </h4>
        <p className="text">
          Effects are an “escape hatch”: you use them when you need to “step
          outside React” and when there is no better built-in solution for your
          use case.it’s usually a sign that you need to extract some custom
          Hooks for common behaviors your components rely on.
        </p>
        <p className="text">
          <strong>Server-Side Rendering (SSR)</strong>
          <br />
          <strong>Initial Render:</strong>
          <br />
          On the server, React renders the component to HTML.{" "}
          <code>useEffect</code> does not run during this server-side render.
          The server just sends the HTML to the client.
          <br />
          <strong>Hydration:</strong>
          <br />
          When the HTML reaches the client, React takes over (this is called
          hydration). Only then does <code>useEffect</code> run, similar to
          Client-Side Rendering (CSR).
          <br />
          <strong>Effect Execution & Cleanup:</strong>
          <br />
          The behavior of effects is the same as in CSR after hydration. They
          run after the component is mounted in the client browser. Cleanup
          works the same way, as the cleanup function runs during unmounting or
          before the next effect.
          <br />
          <strong>Summary:</strong>
          <br />
          In CSR, <code>useEffect</code> runs right after the component mounts
          on the client. In SSR, <code>useEffect</code> runs after hydration on
          the client. It doesn’t run on the server.
          <br />
          <strong>Key Points:</strong>
          <br />
          <code>useEffect</code> is great for managing side effects. It runs
          after rendering (in the browser). Cleanup is essential for avoiding
          memory leaks. In SSR, <code>useEffect</code> runs only after the
          initial HTML is sent and the client takes over.
        </p>
        <h3>Case 2</h3>
        <h4> Specifying reactive dependencies </h4>
        <p className="text">
          Notice that you can’t “choose” the dependencies of your Effect. Every
          reactive value used by your Effect’s code must be declared as a
          dependency.Reactive values include props and all variables and
          functions declared directly inside of your component.To remove a
          dependency, you need to “prove” to the linter that it doesn’t need to
          be a dependency.An Effect with empty dependencies doesn’t re-run when
          any of your component’s props or state change.
        </p>
        <h3>Case 3</h3>
        <h4> Updating State Based on Previous State in an Effect</h4>
        <p className="text">
          When updating state in an effect, use a functional updater to avoid
          dependency issues:
          <br />
          <code>setCount(c=&gt; c + 1);</code> {/* Use functional updater */}
          <br />
          This allows the effect to run without needing the state variable in
          the dependency array, preventing unnecessary re-renders.
        </p>
        <h3>Case 4</h3>
        <h4> Removing unnecessary object and function dependencies</h4>
        <p className="text">
          in every rerender it would create a new function or object so it can
          cause unnecessary rerenduring so to avoid this issue useCallback or
          usememo or create the objection or function directly inside useeffect
          .
        </p>
        <h3>Case 5</h3>
        <h4>
          {" "}
          Reading the latest props and state from an Effect (experimental API
          that has not yet been released)
        </h4>
        <p className="text">
          Use Effect Events with the useEffectEvent hook to access the latest
          props and state without triggering reactivity. This allows you to log
          or handle data without re-running the effect when unrelated state
          changes. By excluding non-reactive code from dependencies, you can
          optimize performance and manage updates more effectively.
        </p>
        <h3>Case 6</h3>
        <h4>Displaying different content on the server and the client</h4>
        <p className="text">
          To render different content on the server and client in React, use{" "}
          <code>useState</code> to track whether the component has mounted
          (e.g., <code>const [didMount, setDidMount] = useState(false)</code>).
          Use <code>useEffect</code> to set <code>didMount</code> to{" "}
          <code>true</code> after the component mounts. Conditionally render
          content based on <code>didMount</code>: show server-rendered content
          initially, then client-specific content after mounting. Example
          structure:
          <pre>
            {`return (
      <div>
        {didMount ? <div>Client content</div> : <div>Loading...</div>}
      </div>
    );`}
          </pre>
          This pattern helps manage differences between server-rendered and
          client-rendered content efficiently.
        </p>

        <h3>Case 7 (Troubleshooting)</h3>
        <h4> My Effect runs twice when the component mounts</h4>
        <p className="text">
          When Strict Mode is on, in development, React runs setup and cleanup
          one extra time before the actual setup. This is a stress-test that
          verifies your Effect’s logic is implemented correctly.
        </p>
        <h3>Case 7 (Troubleshooting)</h3>
        <h4> My Effect runs after every re-render</h4>
        <p className="text">
          First, check that you haven’t forgotten to specify the dependency
          array:
        </p>
        <pre>
          useEffect(() =&gt;{" "}
          {
            // Your effect logic here
          }
          , []); // 🚩 No dependency array: re-runs after every render!
        </pre>
        <p>
          If you’ve specified the dependency array but your effect still re-runs
          in a loop, it may be because one of your dependencies changes on every
          render.
        </p>
        <h3>Case 8 (Troubleshooting)</h3>
        <h4> My Effect keeps re-running in an infinite cycle</h4>
        <p className="text">
          Your Effect is updating some state. That state leads to a re-render,
          which causes the Effect’s dependencies to change
        </p>
      </header>
    </div>
  );
}

export default UseEffect;
