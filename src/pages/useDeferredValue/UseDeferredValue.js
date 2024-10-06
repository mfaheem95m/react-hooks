import React from "react";
import "../../style/Home.css";

function UseDeferredValue() {
  return (
    <div className="Home">
      <header className="description">
        <p>
          <strong>useDeferredValue</strong> is a React Hook that allows you to
          defer updates to part of the UI, enabling smoother user experiences by
          showing stale content while fresh data is loading.
        </p>

        <h3>Description</h3>

        <p>
          <strong>Syntax:</strong>
          <code>
            {" "}
            const deferredValue = useDeferredValue(value, initialValue?)
          </code>
        </p>

        <h3>Parameters</h3>
        <ul>
          <li>
            <strong>value</strong>: The value you want to defer, which can be of
            any type (string, number, object).
          </li>
          <li>
            <strong>initialValue (optional)</strong>: The value used during the
            initial render. If omitted, <code>useDeferredValue</code> won't
            defer on the first render.
          </li>
        </ul>

        <h3>Returns</h3>
        <p>
          The hook returns the current deferred value. Initially, it matches the
          provided value. On updates, React first renders using the old value,
          then schedules a background re-render with the new value to keep the
          UI responsive.
        </p>

        <h3>Usage</h3>
        <p>
          Typically, call <code>useDeferredValue</code> at the top level of your
          component. Here’s an example:
        </p>
        <pre>
          <code>
            {`const [query, setQuery] = useState('');
const deferredQuery = useDeferredValue(query); // Use deferredQuery for rendering`}
          </code>
        </pre>

        <h3>Caveats</h3>
        <ul>
          <li>
            <strong>Transition Handling:</strong> If an update is part of a
            Transition, <code>useDeferredValue</code> won’t defer as the update
            is already managed.
          </li>
          <li>
            <strong>Value Types:</strong> Only pass primitive values or objects
            created outside of rendering. Creating a new object on each render
            can lead to unnecessary re-renders.
          </li>
          <li>
            <strong>Interruptible Updates:</strong> If a new value is received
            while a background render is in progress, it restarts the rendering
            process.
          </li>
          <li>
            <strong>No Delay:</strong> There’s no fixed delay; updates from user
            events (like typing) take precedence over background re-renders.
          </li>
        </ul>

        <p>
          Overall, <code>useDeferredValue</code> is a valuable tool for managing
          UI updates in a way that enhances user experience by making your
          application feel faster and more responsive.
        </p>
        <p className="text">
          When you type something (like "ab"), React quickly updates the screen
          to show that you’re typing, but it still shows the old results for "a"
          until new results are ready. In the background, React tries to get the
          new results for "ab". If it takes too long, you won’t see anything
          change on the screen yet. If you type again before the new results for
          "ab" are ready, React will stop the current fetch and start over with
          your latest input, keeping the interface feeling fast. Each time you
          type, it makes a request for results, but if you delete something
          (like pressing Backspace), it can use the previous results instantly
          without needing to ask the server again.
        </p>
        <p className="text">
          Use <code>useDeferredValue</code> in React to enhance performance when
          you have components that are expensive to re-render, such as{" "}
          <code>SlowList</code>. This hook allows you to prioritize the
          responsiveness of the input field by deferring updates to{" "}
          <code>SlowList</code>. Instead of passing the immediate input value
          directly, you create a <code>deferredText</code> that updates at a
          slower pace. This means that while the user types quickly, the input
          remains smooth and responsive, without being blocked by the rendering
          of <code>SlowList</code>. As a result, the list may lag behind the
          input, but it catches up without disrupting the user experience,
          making for a more fluid interaction overall.
          <br />
          This optimization requires SlowList to be wrapped in memo. This is
          because whenever the text changes, React needs to be able to re-render
          the parent component quickly. During that re-render, deferredText
          still has its previous value, so SlowList is able to skip re-rendering
          (its props have not changed). Without memo, it would have to re-render
          anyway, defeating the point of the optimization.
        </p>
        <p className="text">
          To optimize performance in React, consider three key techniques:{" "}
          <strong>debouncing</strong>, <strong>throttling</strong>, and{" "}
          <code>useDeferredValue</code>. Debouncing waits for a user to stop
          typing before executing a function, making it ideal for reducing
          unnecessary API calls. Throttling limits how often a function can run
          within a given time frame, which is useful for events like scrolling.{" "}
          <code>useDeferredValue</code> enhances rendering by allowing React to
          pause updates during user interactions, ensuring a smooth experience.
          Combining these techniques can maximize performance and improve user
          satisfaction.
        </p>
      </header>
    </div>
  );
}

export default UseDeferredValue;
