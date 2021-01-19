import * as React from "react";

class VideoApp extends React.Component {

    state = {
        timer: null,
        zhText: '我是web秀',
        index: 1
    }

    // 定时器
    iTimer = () => {
        this.setState({
            timer: setInterval(() => {
                var index = this.state.index;
                index++;
                this.setState({index});
                console.log(index)
                const zhText = '我是web秀' + index;
                this.setState({zhText})
                console.log(zhText)

                var url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=" + encodeURI(this.state.zhText);
                var audio = new Audio(url);
                audio.src = url;
                audio.play();
            }, 2000),
        });
    };

    // 组件清除时清除定时器
    componentWillUnmount() {
        clearInterval(this.state.timer && this.state.timer);
    }

    handleClick = () => {
        setTimeout(this.iTimer, 0)
    }

    render() {
        return (
            <div id="container">
                <h2>Video</h2>
                <button onClick={this.handleClick}>start</button>
            </div>
        )
    }
}

export default VideoApp;