import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({item}) => {
    let navigate = useNavigate();
    return (
        <div>
            {item.id} {item.title}

            <button onClick={() => {
                navigate(item.id.toString());
            }}>details of post
            </button>
        </div>
    );
};

export default Post;
