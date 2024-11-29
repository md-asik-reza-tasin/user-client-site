import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div>
            <Link to='/signup'>CREATE USER</Link>
            <Outlet></Outlet>
        </div>
    )
}