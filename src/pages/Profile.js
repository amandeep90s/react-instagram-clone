import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getUserByUsername } from "../services/firebase";
import * as ROUTES from "../constants/routes";
import Header from "../components/Header";
import UserProfile from "../components/profile/UserProfile";

const Profile = () => {
    const { username } = useParams();
    const [userExists, setUserExists] = useState(false);
    const [user, setUser] = useState(null);

    const history = useHistory();

    useEffect(() => {
        async function checkUserExist() {
            const doesUserExist = await getUserByUsername(username);
            if (doesUserExist.length > 0) {
                setUser(doesUserExist[0]);
                setUserExists(true);
            } else {
                history.push(ROUTES.NOT_FOUND);
            }
        }

        checkUserExist();
    }, [username, history]);

    return userExists ? (
        <div className="bg-gray-background">
            <Header />
            <div className="mx-auto max-w-screen-lg">
                <UserProfile user={user} />
            </div>
        </div>
    ) : null;
};

export default Profile;
