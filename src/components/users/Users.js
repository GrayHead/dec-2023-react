import User from "../user/User";

function Users({xxx: users}) {


    return (
        <div>
            {
                users.map((value, index) => (<User item={value} key={index}/>))
            }

        </div>
    );
}

export default Users;

