import React, { PureComponent } from 'react';
import { throttle } from 'lodash';
import { ProgressBar } from './styles';


interface Props {
    
}

interface State {
    value: number;
    max: number;
}

class ScrollProgress extends PureComponent <Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            value: 0,
            max: 1,
        };

        this.handleScroll = throttle(this.handleScroll, 50);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {

        try {
            const winHeight = window.innerHeight;
            const docRect: any = document.body.getBoundingClientRect();
            const docHeight = docRect.height;

            const max = docHeight - winHeight;
            const value = window.pageYOffset;
    
            this.setState({ max, value });
        } catch (e) {

        }
    }

    render() {
        const { max, value } = this.state;

        return (
            <ProgressBar value={value} max={max}></ProgressBar>
        );
    }
}

export default ScrollProgress;
