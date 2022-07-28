import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from 'styled-components';

const WrapperFotter = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:80%;
height:30px;
background-color:black;
color:white;
border-radius: .5rem;

.madeBy{
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 10px;
}

.iconsBox{
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:5%;
    margin: 10px;
}
`

const Footer = () => {
    return <WrapperFotter>
        <div className='madeBy'>
            <p>Made by Konrad Szmyd</p>
        </div>
        <div className='iconsBox'>
        <FacebookIcon color='primary'/>
        <GitHubIcon color='primary'/>
        </div>
    </WrapperFotter>


}

export default Footer

