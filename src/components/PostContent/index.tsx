import React, { PureComponent } from 'react';
import { ContentWrapper } from './styles';
import ImageLightBox from './ImageLightBox';
import ImageGallery from './ImageGallery';

interface Props {
    content: string;
}

interface State {
    lightBoxImages: string[];
    photoIndex: number,
    isOpen: boolean,
}

const fakeImages = [
    {url: 'https://farm5.staticflickr.com/4838/45665842322_684a91a81e_b.jpg'},
    {url: 'https://farm2.staticflickr.com/1914/44802537075_988542785b_b.jpg'},
    {url: 'https://farm2.staticflickr.com/1911/43899023870_c4947d78d0_b.jpg'},
    {url: 'https://farm2.staticflickr.com/1975/31844797178_1831f0c112_b.jpg'},
    {url: 'https://farm2.staticflickr.com/1914/44802537075_988542785b_b.jpg'},
    {url: 'https://farm5.staticflickr.com/4879/45716563071_7190570766_b.jpg'},
    {url: 'https://farm5.staticflickr.com/4885/43899003360_a4a8922269_b.jpg'},
    {url: 'https://farm5.staticflickr.com/4825/45665817162_4515bd1bda_b.jpg'},
    {url: 'https://farm2.staticflickr.com/1912/44991783754_2eae7ea52b_b.jpg'},
    {url: 'https://farm8.staticflickr.com/7861/47299814661_7b4ff99680_b.jpg'},
];

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

            console.log(img.src);

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

        const { content } = this.props;
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

                <ImageGallery openLightBox={this.openLightBox} images={fakeImages} />

            </ContentWrapper>
        )
    }
};

export default PostContent;
