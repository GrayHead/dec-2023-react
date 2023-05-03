const Comment = ({comment}) => {
    const {id, name, email} = comment;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {Comment};
