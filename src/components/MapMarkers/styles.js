import styled from 'styled-components';

export const MapMarkerWrapper = styled.div`
  position: absolute;
  width: 31px;
  height: 31px;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  z-index: 3;
`;

export const MapMarkersWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 2;
  pointer-events: none;
  overflow: hidden; 
`;

export const MapMarkersOverlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
`;
