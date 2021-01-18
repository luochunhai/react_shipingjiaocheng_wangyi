import * as React from "react";
import {NavLink} from "react-router-dom";

class MyNavLink extends React.Component {

    /**
     *  {...this.props} 将外部传入的所有属性，传递给NavLink
     * @returns {*}
     */
    render() {
        return <NavLink {...this.props} activeClassName="activeClass">Router Home</NavLink>
    }
}

export default MyNavLink;