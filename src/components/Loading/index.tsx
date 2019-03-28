import React, { PureComponent } from 'react';
import { LoadingWrapper, SVGWrapper, SVG } from './styles';

interface Props {
    fade: Boolean;
}

class Loading extends PureComponent <Props> {

    componentDidMount() {

        const TweenMax: any = (window as any).TweenMax;
        const TimelineMax: any = (window as any).TimelineMax;
        const MorphSVGPlugin: any = (window as any).MorphSVGPlugin;
        const Power2: any = (window as any).Power2;
        const Linear: any = (window as any).Linear;

        try {

            TweenMax.set('#circlePath', {
                attr: {
                    r: document.querySelector('#mainCircle')!.getAttribute('r')
                }
            })
            MorphSVGPlugin.convertToPath('#circlePath');
            
            var xmlns = "http://www.w3.org/2000/svg",
                xlinkns = "http://www.w3.org/1999/xlink",
                select = function(s: any) {
                return document.querySelector(s);
                },
                selectAll = function(s: any) {
                return document.querySelectorAll(s);
                },
                mainCircle = select('#mainCircle'),
                mainContainer = select('#mainContainer'),
                plane = select('#plane'),
                mainSVG = select('.mainSVG'),
                mainCircleRadius = Number(mainCircle.getAttribute('r')),
                //radius = mainCircleRadius,
                numDots = mainCircleRadius / 2,
                step = 360 / numDots,
                dotMin = 0,
                circlePath = select('#circlePath')
            
            //
            //mainSVG.appendChild(circlePath);
            TweenMax.set('svg', {
                visibility: 'visible'
            })
            TweenMax.set([plane], {
                transformOrigin: '50% 50%'
            })
            
            var circleBezier = MorphSVGPlugin.pathDataToBezier(circlePath.getAttribute('d'), {
                offsetX: -19,
                offsetY: -18
            })
            
            //console.log(circlePath)
            var mainTl = new TimelineMax();
            
            const makeDots = () => {
                var d, angle, tl;
                for (var i = 0; i < numDots; i++) {
            
                d = select('#dot').cloneNode(true);
                mainContainer.appendChild(d);
                angle = step * i;
                TweenMax.set(d, {
                    attr: {
                    cx: (Math.cos(angle * Math.PI / 180) * mainCircleRadius) + 400,
                    cy: (Math.sin(angle * Math.PI / 180) * mainCircleRadius) + 300
                    }
                })
            
                tl = new TimelineMax({
                    repeat: -1
                });
                tl
                .from(d, 0.2, {
                        attr:{
                        r:dotMin
                        },
                        ease:Power2.easeIn
                    })
                    .to(d, 1.8, {
                    attr: {
                    r: dotMin
                    },
                    ease: Power2.easeOut
                })
            
                mainTl.add(tl, i / (numDots / tl.duration()))
                }
                var planeTl = new TimelineMax({
                repeat: -1
                });
                planeTl.to(plane, tl.duration(), {
                bezier: {
                    type: "cubic",
                    values: circleBezier,
                    autoRotate: true
                },
                ease: Linear.easeNone
                })
                mainTl.add(planeTl, 0.05)
            }
            
            makeDots();
            mainTl.time(20);
            TweenMax.to(mainContainer, 30, {
                rotation: -360,
                svgOrigin: '400 300',
                repeat: -1,
                ease: Linear.easeNone
            })
            mainTl.timeScale(1.6);

        } catch(e) {}
          
    }

    render() {

        const { fade } = this.props;

        return (
            <LoadingWrapper fade={fade}>

                <SVGWrapper>

                    <SVG className="mainSVG" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                        <defs>   
                            <circle id="dot"  cx="0" cy="0" r="5" fill="#0371ac"/>   
                        </defs>

                        <circle id="mainCircle" fill="none" stroke="none" strokeWidth="2" strokeMiterlimit="10" cx="400" cy="300" r="70"/>
                        <circle id="circlePath" fill="none" stroke="none" strokeWidth="2" strokeMiterlimit="10" cx="400" cy="300" r="80"/>

                        <g id="mainContainer" >
                            <path id="plane" fill="#0371ac"  d="M38.1,19.6c0.2-0.2,0.3-0.5,0.3-0.7s-0.1-0.6-0.3-0.7c-1.2-1-2.8-1.6-4.4-1.6l-8.7,0L12.2,0L8.2,0l6.3,16.5	l-5.9,0c-0.5,0-1.1,0.1-1.6,0.4L3.1,11L0,11l3.1,7.9L0,26.7l3.1,0l3.9-5.9c0.5,0.3,1,0.4,1.6,0.4l5.9,0L8.2,37.7h3.9l13-16.5l8.7,0	C35.4,21.2,36.9,20.6,38.1,19.6"/>      
                        </g>
                    </SVG>

                </SVGWrapper>

            </LoadingWrapper>
        );
    }

}

export default Loading;