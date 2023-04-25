import {useEffect, useState} from "react";
import {postService} from "../services/post.service";

const Posts = ({flag}) => {
    console.log('constructor');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // postService.getAll().then(value => value.data).then(value => setPosts(value))
        // console.log('componentDidMount');
        // return ()=>{
        //     console.log('componentWillUnmount');
        // }
    }, [])

    // useEffect(() => {
    //     console.log('update');
    // }, [posts])
    return (
        <div>
            {console.log('render')}
            Posts
        </div>
    );
};

export {Posts};
