import styled from 'styled-components';
import { Link } from "react-router-dom";

export const MapMarkerWrapper = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;

export const MarkerImage = styled(Link)`
    overflow: hidden;
    background-repeat: no-repeat;
    height: ${props => (props.hovered ? '60px' : '25px')};
    width: ${props => (props.hovered ? '60px' : '25px')};
    background-size: cover;
    border: 3px solid #ffffff;
    border-radius: 60px;
    display: block;

    &:hover {
        height: 60px;
        width: 60px;
    }
`;