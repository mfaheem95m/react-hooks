import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "../../style/Home.css";

function UseInsertionEffect() {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0); // You don't know real height yet

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height); // Re-render now that you know the real height
  }, []);
  return (
    <div className="Home">
      <header className="description" ref={ref}>
        <p>
          useInsertionEffect allows inserting elements into the DOM before any
          layout Effects fire.
        </p>
        <h3>Description</h3>
        <p className="text">
          Parameters :
          <br />
          The function with your Effect’s logic. Your setup function may also
          optionally return a cleanup function. When your component is added to
          the DOM, but before any layout Effects fire, React will run your setup
          function. After every re-render with changed dependencies, React will
          first run the cleanup function (if you provided it) with the old
          values, and then run your setup function with the new values. When
          your component is removed from the DOM, React will run your cleanup
          function.Effects only run on the client. They don’t run during server
          rendering. You can’t update state from inside useInsertionEffect. By
          the time useInsertionEffect runs, refs are not attached yet.
        </p>
      </header>
    </div>
  );
}

export default UseInsertionEffect;
