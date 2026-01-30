import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function DefaultLayout() {

    return (
        <div>
            <header>
                <Navbar />
            </header>
            <Outlet />
        </div>
    );
}