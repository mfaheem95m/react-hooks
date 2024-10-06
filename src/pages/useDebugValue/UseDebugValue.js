import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "../../style/Home.css";
import { useOnlineStatus } from "../../hooks/useOnlineStatus";

function UseDebugValue() {
  const isOnline = useOnlineStatus();
  console.log(isOnline, "_____11121____");

  return (
    <div className="Home">
      <header className="description">
        <p>
          useDebugValue is a React Hook that lets you add a label to a custom
          Hook in React DevTools.
        </p>
        <h3>Description</h3>
        <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
        <p className="text">
          When using <code>useDebugValue</code>, consider the following:
        </p>
        <p>
          <strong>Purpose:</strong> It enhances debugging by providing clear
          labels for custom Hooks in React DevTools, helping you understand
          their state at a glance.
        </p>
        <p>
          <strong>Parameters:</strong>
          <ul>
            <li>
              <code>value</code>: The value to display in DevTools, which can be
              of any type.
            </li>
            <li>
              <code>format (optional)</code>: A function to format the debug
              value. This is useful for avoiding expensive calculations until
              the component is inspected.
            </li>
          </ul>
        </p>
        <p>
          <strong>Best Practices:</strong>
          <ul>
            <li>
              Use it for custom Hooks in shared libraries or those with complex
              internal structures.
            </li>
            <li>
              Avoid cluttering every custom Hook with debug values to maintain
              clarity in the DevTools interface.
            </li>
          </ul>
        </p>
        <p>
          By using <code>useDebugValue</code> judiciously, you can improve your
          debugging experience while keeping the interface manageable.
        </p>
      </header>
    </div>
  );
}

export default UseDebugValue;
