import React, {useEffect, useState} from 'react';
import Comment from "../comment/Comment";

const Comments = ({lift}) => {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(allComments => {
                setComments(allComments);
                console.log('log');
            });
    }, []);

    return (
        <>
            {
                comments.map(value =>
                    <Comment
                        value={value}
                        lift={lift}
                        key={value.id}/>
                )
            }
        </>
    );
};

export default Comments;
