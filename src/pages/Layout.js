import {Outlet, Link} from "react-router-dom"; 

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/cv">Cv</Link>
                </li>
            </ul> 
        </nav>
        <Outlet />
        </>
    )
};
export default Layout;