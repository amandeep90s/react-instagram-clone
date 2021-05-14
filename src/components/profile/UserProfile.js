import React, { useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { getUserPhotosByUsername } from "../../services/firebase";
import Header from "./Header";
import Photos from "./Photos";

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

            dispatch({
                profile: user,
                photosCollection: photos,
                followerCount: user.followers.length,
            });
        }
        getProfileInfoAndPhotos();
    }, [user, user.username]);

    return (
        <>
            <Header
                photosCount={photosCollection ? photosCollection.length : 0}
                profile={profile}
                followerCount={followerCount}
                setFollowerCount={dispatch}
            />
            <Photos photos={photosCollection} />
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
