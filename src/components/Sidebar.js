
import React from 'react';
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/use-state">UseState</Link>
                    </li>
                    <li>
                        <Link to="/use-effect">useEffect</Link>
                    </li>
                    <li>
                        <Link to="/use-layout-effect">useLayoutEffect</Link>
                    </li>
                    <li>
                        <Link to="/use-insertion-effect">useInsertionEffect</Link>
                    </li>
                    <li>
                        <Link to="/use-callback">useCallback</Link>
                    </li>
                    <li>
                        <Link to="/use-debug-value">useDebugValue</Link>
                    </li>
                    <li>
                        <Link to="/use-deferred-value">useDeferredValue</Link>
                    </li>
                    <li>
                        <Link to="/use-id">useId</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;
