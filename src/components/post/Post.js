import React, { useRef } from "react";
import PropTypes from "prop-types";

const Post = ({ content }) => {
    return <div>Post</div>;
};

export default Post;

Post.propTypes = {
    content: PropTypes.shape({
        username: PropTypes.string,
        imageSrc: PropTypes.string,
        emailAddress: PropTypes.string,
        caption: PropTypes.string,
        docId: PropTypes.string,
        userLikedPhoto: PropTypes.bool,
        likes: PropTypes.array,
        comments: PropTypes.array,
        dateCreated: PropTypes.number,
    }),
};
