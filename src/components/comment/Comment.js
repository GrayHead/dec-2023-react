import React from 'react';
const Comment = ({value,lift}) => {

    return (
        <div>
            {
                <p>
                    id - {value.id} <br/>
                    postId - {value.postId} <br/>
                    name - {value.name} <br/>
                    email - {value.email} <br/>
                    <button onClick={()=> {
                        lift(value);
                    }}>details</button>

                </p>
            }


        </div>
    );
};

export default Comment;
