import React, { useState } from "react"
import logo from './logo.svg';
import './App.css';
import Page from "./components/Page";
import styled from "styled-components";

const MyApp = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

function App() {
  const [logo,setLogo] = useState('LOGO')
  return (
    <MyApp>
      <Page logo = {logo} logoChanger = {setLogo}></Page>
    </MyApp>
  );
}

export default App;
