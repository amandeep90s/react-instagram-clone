import React, { useContext } from "react";
import LoggedInUserContext from "../../context/loggedInUser";
import User from "./User";
import Suggestions from "./Suggestions";

const Sidebar = () => {
    const {
        user: {
            docId = "",
            fullName,
            username,
            userId,
            emailAddress,
            following,
        } = {},
    } = useContext(LoggedInUserContext);

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
