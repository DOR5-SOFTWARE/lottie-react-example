import './IG-sample/ig-sample.css';

import React, { Component } from 'react';

class AnimatedCounter extends Component {

    lottiePlayer = require('./IG-sample/IG');
    animationData = require('./IG-sample/data.json');
    animation = {};
    percentageInput = React.createRef();
    animationContainer = React.createRef();

    play = (percentage) => {
        if (!this.animation.playSegments) return;

        let stopFrame = percentage;
        let startFrame = (percentage > 50) ? percentage - 30 : 0;
        this.animation.playSegments([startFrame, stopFrame + 1]);
    }

    playSelectedPercentage = () => {
        this.play(parseInt(this.percentageInput.current.value));
    }

    componentDidMount() {

        let params = {
            container: this.animationContainer.current,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: this.animationData
        };

        this.animation = this.lottiePlayer.loadAnimation(params);
    }

    render() {
        return (
            <div className="animated-counter-container">
                <div id="lottie" ref={ this.animationContainer }></div>
                <div className="btnWrap">
                    <input placeholder="enter % value" type="text" ref={ this.percentageInput } />
                    <button onClick={ this.playSelectedPercentage }>play</button>
                </div>
            </div>
        );
    }
}

export default AnimatedCounter;
