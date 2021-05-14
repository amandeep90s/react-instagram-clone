import { useEffect, useState } from "react";
import { getUserByUserId } from "../services/firebase";

const UseUser = (userId) => {
    const [activeUser, setActiveUser] = useState({});

    useEffect(() => {
        async function getUserObjByUserId() {
            const [user] = await getUserByUserId(userId);
            setActiveUser(user || {});
        }

        if (userId) {
            getUserObjByUserId(userId);
        }
    }, [userId]);

    return { user: activeUser };
};

export default UseUser;
