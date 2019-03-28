import React, { PureComponent } from 'react';
import { throttle } from 'lodash';
import { Wrapper, Icon  } from './styles';

interface Props {
    
}

interface State {
    shown: boolean;
}

class ScrollTop extends PureComponent <Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            shown: false,
        };

        this.checkScroll = throttle(this.checkScroll, 50);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.checkScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.checkScroll);
    }

    checkScroll = () => {

        const { shown } = this.state;

        try {
            const threshold = 200;
            const scrollTop =
            window.pageYOffset !== undefined
                ? window.pageYOffset
                : (
                      document.documentElement ||
                      document.body.parentNode ||
                      document.body
                  ).scrollTop;

            if (scrollTop > threshold && !shown) {
                this.setState({
                    shown: true,
                });
            }

            if (scrollTop <= threshold && shown) {
                this.setState({
                    shown: false,
                });
            }
        } catch (e) {

        }
    }

    handleScroll = () => {
        const documentTop = document.body.getBoundingClientRect();
        window.scroll(0, documentTop.top);
    };

    render() {
        const { shown } = this.state;

        if (!shown) return null;

        return (
            <Wrapper onClick={() => this.handleScroll()}>
                <Icon />
            </Wrapper>
        );
    }
}

export default ScrollTop;
