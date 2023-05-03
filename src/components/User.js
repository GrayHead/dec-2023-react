const User = ({user}) => {
    const {id, name, username} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>surname: {username}</div>
        </div>
    );
};

export {User};
