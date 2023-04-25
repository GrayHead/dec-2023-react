import {Component} from "react";
import {userService} from "../services/user.service";
import {User} from "./User";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
        console.log('constructor');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentDidMount() {
        userService.getAll().then(value => value.data).then(value => this.setState({users:value}))
        console.log('componentDidMount');
    }

    render() {
        console.log('render');
        return (
            <div>
                {this.state.users.map(user=><User key={user.id} user={user}/>)}
            </div>
        )
    }
}

export {Users}
