import React from 'react';
import './App.css';
import Background from './BackGroud'
import{rotateIn} from 'react-animations'
import styled, { keyframes } from 'styled-components';
import lzc from './assets/images/3.jpg'
const rotateInAnimation = keyframes`${rotateIn}`;
const RotateInDiv = styled.div`
  animation:  5s ${rotateInAnimation};
`;
const PictureContainer = styled.div`
  width:800px;
`;

function App() {
  return (
 
    <div className="App" id="particles-js">
    <Background />
    <header className="App-header">
    <h2>
       Wedding invitation
    </h2>
      <img src={lzc} className="App-logo" alt="logo" width={200} height={240}/>
      <RotateInDiv>
       <img src={lzc} alt='lzc' width={200} height={240} />
       </RotateInDiv>
    </header>
    <main className="App-header">
      <PictureContainer >
      <RotateInDiv>
       <img src={lzc} alt='lzc' width={500} height={550} />
       </RotateInDiv>
      </PictureContainer>
   </main>
  </div>

  );
}

export default App;
