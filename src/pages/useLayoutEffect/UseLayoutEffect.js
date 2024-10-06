import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "../../style/Home.css";
import User from "../User";
function UseLayoutEffect() {
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
          useLayoutEffect is a version of useEffect that fires before the
          browser repaints the screen.Layout effects are performed synchronously
          in React right after the component's corresponding element node is
          injected into the DOM, typically to perform style computations
          involving elements from this DOM tree, but before the next repaint.
        </p>
        <h3>Description</h3>
        <p className="text">
          Parameters :
          <br />
          The function with your Effect’s logic. Your setup function may also
          optionally return a cleanup function. Before your component is added
          to the DOM, React will run your setup function. After every re-render
          with changed dependencies, React will first run the cleanup function
          (if you provided it) with the old values, and then run your setup
          function with the new values. Before your component is removed from
          the DOM, React will run your cleanup function.Effects only run on the
          client. They don’t run during server rendering. The code inside
          useLayoutEffect and all state updates scheduled from it block the
          browser from repainting the screen. When used excessively, this makes
          your app slow. When possible, prefer useEffect.
          <br />
          To help you find bugs, in development React runs setup and cleanup one
          extra time before the setup.This is a stress-test that verifies your
          Effect’s logic is implemented correctly. <br />
          If you’re not connecting to any external system, you probably don’t
          need an Effect. useLayoutEffect returns undefined.
        </p>
        <h3>Case 1</h3>
        <h4> Measuring layout before the browser repaints the screen</h4>
        <p className="text">
          To dynamically position a tooltip based on its height, start by
          initializing the tooltipHeight to 0 and rendering the tooltip. Use
          useLayoutEffect to measure the tooltip’s height right after rendering,
          ensuring this happens before the browser repaints. Update the
          tooltipHeight state with the measured value to trigger a re-render,
          allowing you to adjust the tooltip's style based on the height (e.g.,
          positioning it above or below the target element). This method helps
          prevent flickering and provides a smooth user experience.
        </p>
        <h3>Case 2 (Troubleshooting )</h3>
        <h4>
          {" "}
          I’m getting an error: “useLayoutEffect does nothing on the server”
        </h4>
        <p className="text">
          {" "}
          To avoid the "useLayoutEffect does nothing on the server" error,
          replace useLayoutEffect with useEffect for measuring layout in
          server-rendered components. Use a boolean state (isMounted)
          initialized to false, and set it to true in a useEffect to manage
          client-side rendering. Render a fallback during server-side rendering,
          then display the tooltip with layout measurements once the component
          is mounted. This ensures smooth functionality without layout jumps.
        </p>
        <User />
      </header>
    </div>
  );
}

export default UseLayoutEffect;
