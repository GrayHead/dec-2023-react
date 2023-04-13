// const Post = ({post,setPost}) => {
import {useState} from "react";

const Post = ({post}) => {
    const [show, setShow] = useState(false);
    const {id, title} = post;

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => setShow(prev => !prev)}>details</button>
            <hr/>
            {
                show &&
                <div>
                    <div>id: {post.id}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                    <div>userId: {post.userId}</div>
                </div>
            }
        </div>
    );
};

export {Post};
