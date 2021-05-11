import React from "react";
import UseUser from "../../hooks/UseUser";
import User from "./User";
import Suggestions from "./Suggestions";

const Sidebar = () => {
    const {
        user: { fullName, username, userId },
    } = UseUser();

    return (
        <div className="p-4">
            <User fullName={fullName} username={username} />
            <Suggestions userId={userId} />
        </div>
    );
};

export default Sidebar;
