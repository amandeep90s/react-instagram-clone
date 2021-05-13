import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { getUserPhotosByUsername } from "../../services/firebase";

const UserProfile = ({ user }) => {
    const reducer = (state, newState) => ({ ...state, ...newState });
    const initialState = {
        profile: {},
        photosCollection: [],
        followerCount: 0,
    };
    const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        async function getProfileInfoAndPhotos() {
            const photos = await getUserPhotosByUsername(user.username);

            // dispatch({
            //     profile: user,
            //     photosCollection: photos,
            //     followerCount: user.followers.length,
            // });
        }
        if (user.username) {
            getProfileInfoAndPhotos();
        }
    }, [user.username]);

    return (
        <>
            <Header />
        </>
    );
};

export default UserProfile;

UserProfile.propTypes = {
    user: PropTypes.shape({
        userId: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        dateCreated: PropTypes.number.isRequired,
        emailAddress: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        following: PropTypes.array.isRequired,
        followers: PropTypes.array.isRequired,
    }).isRequired,
};
