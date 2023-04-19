import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const PostDetails = () => {

    let {id} = useParams();
    let [post, setPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.json())
            .then(value => {
                setPost({...value});
            });
    }, [id]);

    return (
        <div>
            {
                post && JSON.stringify(post)
            }

        </div>
    );
};

export default PostDetails;
