import React from "react";
import { Link } from "react-router-dom";
import Gravatar from "react-gravatar";
import PropTypes from "prop-types";

const Header = ({ username, email }) => {
    return (
        <div className="flex border-b border-gray-primary h-4 p-4 py-8">
            <div className="flex items-center">
                <Link to={`/p/${username}`} className="flex items-center">
                    <Gravatar
                        email={email}
                        size={100}
                        rating="pg"
                        default="monsterid"
                        className="rounded-full h-8 w-8 flex mr-3"
                    />
                    <p className="font-bold">{username}</p>
                </Link>
            </div>
        </div>
    );
};

export default Header;

Header.propTypes = {
    username: PropTypes.string,
    email: PropTypes.string,
};
