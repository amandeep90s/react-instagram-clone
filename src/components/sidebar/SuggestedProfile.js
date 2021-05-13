import React, { useState } from "react";
import PropTypes from "prop-types";
import Gravatar from "react-gravatar";
import { Link } from "react-router-dom";
import {
    updateLoggedInUserFollowing,
    updateFollowedUserFollowers,
} from "../../services/firebase";

const SuggestedProfile = ({
    profileDocId,
    email,
    username,
    userId,
    profileId,
    loggedInUserDocId,
}) => {
    const [followed, setFollowed] = useState(false);

    const handleFollowUser = async () => {
        setFollowed(true);
        // update the following array of the logged in user (in this case, my profile)
        await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false);
        // update the followers array of the user who has been followed
        await updateFollowedUserFollowers(profileDocId, userId, false);
    };

    return !followed ? (
        <div className="flex flex-row items-center align-items justify-between">
            <div className="flex items-center justify-between">
                <Gravatar
                    email={email}
                    size={100}
                    rating="pg"
                    default="monsterid"
                    className="rounded-full w-8 flex mr-3"
                />

                <Link to={`/p/${username}`}>
                    <p className="font-bold text-sm">{username}</p>
                </Link>
            </div>
            <button
                type="button"
                className="text-xs font-bold text-blue-medium focus:outline-none"
                onClick={handleFollowUser}
            >
                Follow
            </button>
        </div>
    ) : null;
};

export default SuggestedProfile;

SuggestedProfile.propTypes = {
    profileDocId: PropTypes.string,
    email: PropTypes.string,
    username: PropTypes.string,
    userId: PropTypes.string,
    profileId: PropTypes.string,
    loggedInUserDocId: PropTypes.string,
};
