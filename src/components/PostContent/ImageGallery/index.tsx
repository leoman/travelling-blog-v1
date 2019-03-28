import React, { PureComponent } from 'react';
import { Wrapper, Background, Gradient, Grid, ImageWrapper, Image, H1 } from './styles';

interface Props {
    images: Array<{
        url: string;
    }>;
    openLightBox(index: number): void;
}

class ImageGallery extends PureComponent <Props> {
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
                                        <Image onClick={() => openLightBox(i)} src={url} alt="Sample photo" />
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