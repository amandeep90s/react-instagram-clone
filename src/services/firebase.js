import { FieldValue, firebase } from "../lib/firebase";

export const doesUsernameExist = async (username) => {
    const result = await firebase
        .firestore()
        .collection("users")
        .where("username", "==", username)
        .get();

    return result.docs.length > 0;
};

export const getUserByUserId = async (userId) => {
    const result = await firebase
        .firestore()
        .collection("users")
        .where("userId", "==", userId)
        .get();
    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id,
    }));

    return user;
};

export const getSuggestedProfiles = async (userId, following) => {
    const result = await firebase
        .firestore()
        .collection("users")
        .limit(10)
        .get();

    return result.docs
        .map((user) => ({ ...user.data(), docId: user.id }))
        .filter(
            (profile) =>
                profile.userId !== userId && !following.includes(profile.userId)
        );
};

export const updateLoggedInUserFollowing = async (
    loggedInUserDocId,
    profileId,
    isFollowingProfile
) => {
    return firebase
        .firestore()
        .collection("users")
        .doc(loggedInUserDocId)
        .update({
            following: isFollowingProfile
                ? FieldValue.arrayRemove(profileId)
                : FieldValue.arrayUnion(profileId),
        });
};

export const updateFollowedUserFollowers = async (
    profileDocId,
    loggedInUserDocId,
    isFollowingProfile
) => {
    return firebase
        .firestore()
        .collection("users")
        .doc(profileDocId)
        .update({
            followers: isFollowingProfile
                ? FieldValue.arrayRemove(loggedInUserDocId)
                : FieldValue.arrayUnion(loggedInUserDocId),
        });
};
