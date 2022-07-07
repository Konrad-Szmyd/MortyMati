import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";
import CharacterList from "./CharacterList";
import ImgSrc from "../assets/img/Panda.jpg";
import ToDo from "./ToDo";
import Contact from "./Contatc";
const WrapperApp = styled.div`
    display: flex;
    width:90%;
    flex-direction:column;
    align-items: center;
    font-weight:500;
    border-radius:.5rem;
`
const WrapperPage = styled.div`
    display: flex;
    width:80%;
    justify-content: center;
    align-items: center;
    background-color:#9652D9;
    font-weight:500;
    border-radius:.5rem;
`

const WrapperMenu = styled.div`
    display: flex;
    flex-direction:row;
    width:80%;
    justify-content: space-between;
    align-items: center;
    background-color:#F29829;
    font-weight:500;
    border-radius:.5rem;
`

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:2rem;
    padding: 0 1rem;
`

const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:2rem;
`
const Item = styled.a`
    padding: 0 1rem;
    cursor:pointer;
`

const Menu = ({logo,logoChanger}) =>{
    const [page,setPage] = useState('')

    const changePage = (e) =>{
        setPage(e.target.innerText)
    }

    const person = {
        name:'Konrad',
        surname:'Szmyd',
        img: ImgSrc,
        detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
    }


    return(
        <WrapperApp>
            <WrapperMenu>
                <Logo>{logo}</Logo>
                <Links>
                    <Item onClick={changePage}>O mnie</Item>
                    <Item onClick={changePage}>Lista postaci</Item>
                    <Item onClick={changePage}>ToDo</Item>
                    <Item onClick={changePage}>Kontakt</Item>
                </Links>
            </WrapperMenu>
            <WrapperPage>
                {page == 'O mnie' && <AboutMe person = {person} logoChanger={logoChanger} logo={logo}/>}
                {page == 'Lista postaci' && <CharacterList/>}
                {page == 'ToDo' && <ToDo logoChanger={logoChanger} logo={logo}/>}
                {page == 'Kontakt' && <Contact/>}
            </WrapperPage>
        </WrapperApp>
        
    )
}

export default Menu