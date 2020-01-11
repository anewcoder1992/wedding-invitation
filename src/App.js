import React from 'react';
import Slider from 'react-slick';
import Sound from 'react-sound';
import './App.css';
import Background from './BackGroud';
import { fadeInLeft } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import lzc from './assets/images/3.jpg';
import music from './assets/audio/Princess.mp3';
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const RotateInDiv = styled.div`
  animation: 5s ${fadeInLeftAnimation};
`;
const PictureContainer = styled.div`
  width: 800px;
  heith: 400px;
`;

function App() {
  return (
    <div className="App" id="particles-js">
      <Background />
      <header className="App-header">
        <h2>Wedding invitation</h2>
        <img src={lzc} className="App-logo" alt="logo" width={200} height={240} />
      </header>
      <main className="App-header">
        <PictureContainer>
          <RotateInDiv>
            <img src={lzc} alt="lzc" width={300} height={400} />
          </RotateInDiv>
        </PictureContainer>
      </main>
      <Sound
        url={music}
        playStatus={Sound.status.PLAYING}
        playFromPosition={0.3 /* in milliseconds */}
        // onLoading={this.handleSongLoading}
        // onPlaying={this.handleSongPlaying}
        // onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    </div>
  );
}

export default App;
