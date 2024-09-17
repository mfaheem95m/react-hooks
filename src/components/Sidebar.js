
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
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;
