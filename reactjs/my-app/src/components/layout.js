import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
        <header>
        <h1>AutoShow.by</h1>
        <hr></hr> 
        <ul>
            <li><Link to="/cars">Car catalog</Link></li>
            <li><Link to={`clients`}>Clients</Link></li>
            <li><Link to={`cars/`}>Sales</Link></li>
            <li><Link to={`employees`}>Employees</Link></li>
        </ul>
        </header>

        <Outlet />

        </>
    )
}

export default Layout