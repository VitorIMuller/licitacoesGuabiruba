import { useState } from "react";
import styled from "styled-components";
import logo from "../../Assets/brasaoGuabiruba.jpg"

export default function HomePage() {
  
  return (
    <>
      <Header>
        <img src={logo}/>
        <p>Prefeitura de Guabiruba</p>
      </Header>
      <Home>
        
      </Home>
    </>
  )
}

const Home = styled.div`
  background-color: #000027;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
    background-color: blue;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    gap: 10px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    img{
      width: 60px;
      height: 60px;
      border-radius: 20px;
    }
    p{
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      color: white;
      font-weight: 500;
    }
`;
