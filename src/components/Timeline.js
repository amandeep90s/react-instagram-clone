import React, { useContext } from "react";
import Skeleton from "react-loading-skeleton";
import UsePhotos from "../hooks/UsePhotos";
import Post from "./post/Post";
import LoggedInUserContext from "../context/loggedInUser";

const Timeline = () => {
    const { user } = useContext(LoggedInUserContext);
    const { photos } = UsePhotos(user);

    return (
        <div className="container col-span-2">
            {!photos ? (
                <Skeleton count={4} width={640} height={500} className="mb-5" />
            ) : (
                photos.map((content) => (
                    <Post key={content.docId} content={content} />
                ))
            )}
        </div>
    );
};

export default Timeline;
