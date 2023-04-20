import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/post.service";

const Post = () => {
    const [post, setPost] = useState(null);
    const {postId} = useParams();

    useEffect(() => {
        postService.getById(postId).then(value => value.data).then(value => setPost(value))
    }, [postId])

    return (
        <div>
            {post&&(
                <div>
                    <div>id: {post.id}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </div>
            )}
        </div>
    );
};

export {Post};
