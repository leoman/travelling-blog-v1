import styled from 'styled-components';

export const ContentWrapper = styled.div`
    
    section {

        margin: 0 auto;

        @media (max-width: 1230px) and (min-width: 1024px) {
            width: 768px;
        }

        @media (min-width: 1230px) {
            width: 768px;
        }

        @media (min-width: 1400px) {
            width: 768px;
        }

        @media (max-width: 1023px) and (min-width: 768px) {
            width: 768px;
        }

        
        @media (max-width: 767px) {
            width: 100%;
        }
    }

    h1 {
        font-family: 'lato','HelveticaNeue','Helvetica Neue','Helvetica-Neue',Helvetica,Arial,sans-serif;
        font-size: 28px;
        line-height: 1.1em;
        font-weight: lighter;
        max-width: 600px;
        margin: auto auto;
        padding-top: 15px;
        padding-bottom: 15px;
        color: #0371ac;
        letter-spacing: 1px;
    }

    h2 {
        font-family: 'lato','HelveticaNeue','Helvetica Neue','Helvetica-Neue',Helvetica,Arial,sans-serif;
        font-size: 24px;
        line-height: 1.1em;
        font-weight: lighter;
        max-width: 600px;
        margin: auto auto;
        padding-top: 15px;
        padding-bottom: 15px;
        color: #0371ac;
        letter-spacing: 1px;
    }
    
    p {
        max-width: 600px;
        margin: auto auto;
        padding-top: 20px;
        padding-bottom: 20px;
        font-weight: lighter;
        font-family: 'lato','HelveticaNeue','Helvetica Neue','Helvetica-Neue',Helvetica,Arial,sans-serif;
        font-size: 19px;
        line-height: 1.8rem;
    }

    .full-width {
        width: 100%;
    }

    .center {
        text-align: center;
    }

    .double {
        display: flex;
        flex-direction: row;
        width: 80%;
        margin: 0 auto;

        img {
            width: 50%;
            object-fit: cover;
        }
    }
`;

export const DoubleImageWrapper = styled.div`
    

`;
