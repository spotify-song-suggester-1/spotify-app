import styled from "styled-components";

//  Card Components

export const CardBase = styled.div`
  border-radius: 8px;
  background-color: white;
  margin: ${props => props.divMargin};
  height: ${props => props.cardHeight};
  width: ${props => props.cardWidth};
`;

// Alignment

export const VerticalAlign = styled.div`
  display: flex;
  flex-flow: column;
  height: ${props => props.contentHeight};
`;

export const HorizontalAlign = styled.div`
  margin: 0 auto;
  display: flex;
  overflow-x: scroll;
  width: 95vw;
`;

export const ScrollInner = styled.div`
  display: flex;
  white-space: nowrap;
  align-content: space-between;
`;
