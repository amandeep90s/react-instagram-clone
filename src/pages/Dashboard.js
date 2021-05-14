import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Timeline from "../components/Timeline";
import UseUser from "../hooks/UseUser";
import LoggedInUserContext from "../context/loggedInUser";

const Dashboard = ({ user: loggedInUser }) => {
    const { user } = UseUser(loggedInUser.uid);

    useEffect(() => {
        document.title = "Instagram";
    }, []);

    return (
        <LoggedInUserContext.Provider value={{ user }}>
            <div className="bg-gray-background">
                <Header />
                <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
                    <Timeline />
                    <Sidebar />
                </div>
            </div>
        </LoggedInUserContext.Provider>
    );
};

export default Dashboard;

Dashboard.propTypes = {
    user: PropTypes.object.isRequired,
};
