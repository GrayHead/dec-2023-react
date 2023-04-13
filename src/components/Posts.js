import {useEffect, useState} from "react";
import axios from "axios";
import {Post} from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    // const [post, setPost] = useState(null);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts').then(value => value.data).then(value => setPosts(value))
    }, [])

    return (
        <div>
            {/*{post&&*/}
                {/*<div>*/}
                {/*    <div>id: {post.id}</div>*/}
                {/*    <div>title: {post.title}</div>*/}
                {/*    <div>body: {post.body}</div>*/}
                {/*    <div>userId: {post.userId}</div>*/}
                {/*</div>*/}
            {/*}*/}
            {/*{posts.map(post => <Post key={post.id} post={post} setPost={setPost}/>)}*/}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
