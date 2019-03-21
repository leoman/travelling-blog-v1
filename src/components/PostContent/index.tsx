import React from 'react';
import { ContentWrapper, DoubleImageWrapper } from './styles';

const PostContent = (props: any) => {
    return (
        <ContentWrapper>
            
            <div dangerouslySetInnerHTML={{__html: props.content }}></div>

        </ContentWrapper>
    )
};

export default PostContent;
