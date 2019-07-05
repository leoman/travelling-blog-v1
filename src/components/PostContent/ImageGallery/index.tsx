import React, { PureComponent } from 'react';
import { Wrapper, Background, Gradient, Grid, ImageWrapper, Image, H1 } from './styles';

interface Props {
    images: Array<{
        url: string;
    }>;
    openLightBox(index: number): void;
    lightBoxImageCount: number;
}

class ImageGallery extends PureComponent <Props> {

    getImagePosition(pos: number) : number {
        const { lightBoxImageCount } = this.props;
        const actualPos = Number(pos + (lightBoxImageCount - 1));

        return actualPos;
    }

    render() {
        const { images, openLightBox } = this.props;
        if (!images) return null;

        return  (
            <Wrapper>
                <Background>
                    <Gradient>
                        <section>
                            <H1>Some more snaps from our adventure</H1>
                            <Grid>
                                {images.map(({ url }, i) => (
                                    <ImageWrapper key={i.toString()}>
                                        <Image onClick={() => openLightBox(this.getImagePosition(i))} src={url} alt="" />
                                    </ImageWrapper>
                                ))}
                            </Grid>
                        </section>
                    </Gradient>
                </Background>
            </Wrapper>
        )
    }
}

export default ImageGallery;