const User = ({item}) => {

    return (
        <>
            <div>name is - {item.name}</div>
            <div>age - {item.age}</div>
            <div>status is - {item.status.toString()}</div>
            <br/>
        </>
    );
}

export default User;
