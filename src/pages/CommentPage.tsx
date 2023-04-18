import {FC, useEffect, useState} from 'react';

import {IComment} from '../interfaces/comment.interface';
import {commentService} from '../services/comment.service';
import {CommentForm} from '../components/CommentForm';
import {Comments} from '../components/Comments';

interface IProps {

}

const CommentPage: FC<IProps> = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        commentService.getAll().then(res => res.data).then(value => setComments(value))
    }, [])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentPage};
