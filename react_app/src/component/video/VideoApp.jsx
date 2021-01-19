import * as React from "react";
import axios from "axios";

class VideoApp extends React.Component {

    state = {
        stockAudiosText: '',
        timer: null,
    }

    com
    // 定时器
    iTimer = () => {
        this.setState({
            timer: setInterval(() => {
                this.getStockAudiosText();
                console.log(this.state.stockAudiosText)
                var url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=" + encodeURI(this.state.stockAudiosText);
                var audio = new Audio(url);
                audio.src = url;
                audio.play();
            }, 10000),
        });
    };

    startAudio = () => {
        console.log('start audio')
        this.getStockAudiosText();
        setTimeout(this.iTimer, 0)
    }
    // 组件清除时清除定时器
    stopAudio = () => {
        clearInterval(this.state.timer && this.state.timer);
    }

    componentWillUnmount() {
        clearInterval(this.state.timer && this.state.timer);
    }

    getStockAudiosText = () => {
        axios.get("http://www.luochunhai.club:9093/summer/stocks/audios?stockIds=601688%2C000923")
            .then(res => {
                const stockAudiosText = res.data.stockAudios.join(' ');
                this.setState({stockAudiosText})
            })
    }

    render() {
        return (
            <div id="container">
                <h2>Video</h2>
                <button onClick={this.getStockAudiosText}>get data</button>
                <button onClick={this.startAudio}>startAudio</button>
                <button onClick={this.stopAudio}>stopAudio</button>
            </div>
        )
    }
}

export default VideoApp;