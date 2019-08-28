import React, {Component} from 'react';
import Menu from "./Menu";
import UserStatus from "./UserStatus";

class Navigation extends Component {
    render() {
        return (
            <nav>
                <Menu/>
                <UserStatus/>
            </nav>
        )
    }
}

export default Navigation