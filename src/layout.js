import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./universal_components/Navbar";
import Footer from "./universal_components/Footer";


const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;