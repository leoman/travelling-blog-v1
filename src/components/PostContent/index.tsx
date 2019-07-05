import React, { PureComponent } from 'react';
import { ContentWrapper } from './styles';
import ImageLightBox from './ImageLightBox';
import ImageGallery from './ImageGallery';
import { PhotoModel } from '../../models/PostModel';

interface Props {
    content: string;
    photos: PhotoModel[];
}

interface State {
    lightBoxImages: string[];
    photoIndex: number,
    isOpen: boolean,
}

class PostContent extends PureComponent <Props, State> {

    contentRef: any;

    constructor(props: Props) {
        super(props);
        this.contentRef = React.createRef();

        this.state = {
            photoIndex: 0,
            isOpen: false,
            lightBoxImages: [],
        }
      }

    componentDidMount() {

        const { contentRef } = this;

        const imageList = contentRef.current.querySelectorAll('img');
        let lightBoxImages: string[] = [];

        imageList.forEach((img: any, i: number) => {

            img.setAttribute('data-image-id', i);

            lightBoxImages = [...lightBoxImages, img.src]
        });

        this.setState({ lightBoxImages })
    }

    // React.MouseEvent<HTMLElement>
    checkTargetClick = (e: any) => {
        const element = e.target;
        const dataId = element.getAttribute('data-image-id');
        if (dataId) {
            this.setState({
                photoIndex: dataId,
                isOpen: true
            });
        }
    }

    openLightBox = (index: number) => this.setState({ photoIndex: index, isOpen: true });

    render() {

        const { content, photos } = this.props;
        const { isOpen, photoIndex, lightBoxImages } = this.state;

        return (
            <ContentWrapper ref={this.contentRef}>

                <ImageLightBox
                    isOpen={isOpen}
                    photoIndex={photoIndex}
                    lightBoxImages={lightBoxImages}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() => this.setState({ photoIndex: (photoIndex + lightBoxImages.length - 1) % lightBoxImages.length }) }
                    onMoveNextRequest={() => this.setState({ photoIndex: (photoIndex + 1) % lightBoxImages.length }) }
                />
                
                <div onClick={e => this.checkTargetClick(e)} dangerouslySetInnerHTML={{__html: content }}></div>

                <ImageGallery openLightBox={this.openLightBox} lightBoxImageCount={lightBoxImages.length} images={photos} />

            </ContentWrapper>
        )
    }
};

export default PostContent;
