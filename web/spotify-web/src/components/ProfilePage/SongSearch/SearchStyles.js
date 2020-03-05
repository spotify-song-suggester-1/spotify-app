import styled from "styled-components";

export const ResDiv = styled.div `
    height: 40%;
    max-height:300px;
    overflow-y: scroll;
`;

export const Item = styled.li`
  font-family: "Poppins", sans-serif;
  text-align: left;
  color: white;
  list-style:none;
`;

export const SearchInput = styled.input`
    margin-top:20px;
    background-color:#434D4F;
    border: #434D4F solid 3px;
    border-radius: 8px 0 0 8px;
    color: white;
    font-family: "Poppins", sans-serif;
`;

export const SearchButton = styled.button`
    background-color:#0C2B31;
    border: #434D4F solid 3px;
    border-radius: 0 8px 8px 0;
    font-family: "Poppins", sans-serif;
    color:white;
    &:hover{
        background-color:#00C7C7;
    }
`;

export const SearchImg = styled.img`
    width: 50px;
    height:50px;
    margin-right:10px;
`;