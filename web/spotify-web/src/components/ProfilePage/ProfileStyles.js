import styled from "styled-components";
import { CardBase } from "../../styles/styles";
import discover from '../../components/img/discover.png';

export const DiscoverCard = styled(CardBase)`
  background-image:
  linear-gradient(139.77deg, rgba(0, 44, 199, 0.53) 39.26%, rgba(68, 68, 68, 0.38) 87.48%),
    url(${discover});
  max-width: 382px;
  height: 200px;
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  color: white;
  font-family: "Poppins", sans-serif;
  text-align: left;
  margin-left: 10px;
`;

export const Subtext = styled.p`
  color: white;
  font-family: "Poppins", sans-serif;
  text-align: left;
  margin-left: 10px;
`;

export const SectionText = styled.h2`
  color: white;
  font-family: "Poppins", sans-serif;
  text-align: left;
  margin-left: 10px;
`;
