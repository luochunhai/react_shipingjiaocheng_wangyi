import * as React from "react";
import {Button, Toast} from 'antd-mobile';

class AntdApp extends React.Component {

    handleClick = () => {
        Toast.info('success', 1);
    }

    render() {
        return (
            <div>
                <Button type='primary' onClick={this.handleClick}>start</Button>
            </div>
        )
    }
}

export default AntdApp;