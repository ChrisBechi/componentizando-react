import styled from 'styled-components';

export const Cards = styled.div`
  background: #bbb;
  width: 300px;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  margin: 10px;

  & > h2 {
    text-align: center;
    margin: auto;
    padding: 0 0 10px;
    border-bottom: 1px solid black;
    width: 90%;
  }
  
  & > div {
    display: block;
    height: auto;
  }

  & > img {
    width: 90%;
    height: 150px;
    object-fit: cover;
    padding-top:5px ;
    display: block;
    margin: auto;
  }

  & > div > :first-child {
    margin-top: 10px;
  }

  & > div > p {
    margin: 3px 0 0;
  }

  & > button {
    display: block;
    border: none;
    padding: 10px 40px;
    border-radius: 10px;
    margin: auto;
    margin-top: 10px;
    background-color: green;
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  & > button:hover{
    text-decoration: underline;
    cursor: pointer;
  }

  & > button > a:visited {
    color: white;
    text-decoration: none;
  }
`

export const Main = styled.main`
  display: flex;
  justify-content: center;
`

export const WrapperContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 93.4%;
`