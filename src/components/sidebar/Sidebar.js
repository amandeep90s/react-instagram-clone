import React from "react";
import UseUser from "../../hooks/UseUser";
import User from "./User";
import Suggestions from "./Suggestions";

const Sidebar = () => {
    const {
        user: { docId, fullName, username, userId, emailAddress, following },
    } = UseUser();

    return (
        <div className="p-4">
            <User
                fullName={fullName}
                username={username}
                emailAddress={emailAddress}
            />
            <Suggestions
                userId={userId}
                following={following}
                loggedInUserDocId={docId}
            />
        </div>
    );
};

export default Sidebar;

Sidebar.whyDidYouRender = true;
