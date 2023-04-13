import {useEffect, useState} from "react";
import axios from "axios";
import {UserPost} from "./UserPost";

const UserPosts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(value => value.data).then(value => setPosts(value))
    }, [userId])

    return (
        <div>
            {posts.map(post=><UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPosts};
