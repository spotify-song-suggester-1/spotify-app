import styled from "styled-components";
import { HorizontalAlign } from "../../styles/styles";

export const NavSection = styled(HorizontalAlign)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 56px;
  justify-content: space-around;
  align-items: center;
  background-color: #434d4f;
`;

export const NavText = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  color: white;
  margin: 5px;
`;
