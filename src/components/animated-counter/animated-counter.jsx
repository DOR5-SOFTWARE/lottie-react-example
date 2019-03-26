/* eslint-disable */
import './IG-sample/ig-sample.css';

import React, { Component } from 'react';

if (!window.Lottie) {
    window.Lottie = require('./IG-sample/IG');
}

class AnimatedCounter extends Component {

    animation = {};
    percentageInput = React.createRef();
    animationData = require('./IG-sample/data.json');

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
            container: window.lottie,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: this.animationData
        };

        this.animation = window.Lottie.loadAnimation(params);
    }

    render() {
        return (
            <div className="animated-counter-container">
                <div id="lottie"></div>
                <div className="btnWrap">
                    <input type="text" ref={ this.percentageInput } />
                    <button onClick={ this.playSelectedPercentage }>play</button>
                </div>
            </div>
        );
    }
}

export default AnimatedCounter;
