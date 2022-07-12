import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AboutMe from "./AboutMe";
import CharacterList from "./CharacterList";
import ImgSrc from "../assets/img/Panda.jpg";
import ToDo from "./ToDo";
import Contact from "./Contatc";

const PERSON = {
    name:'Konrad',
    surname:'Szmyd',
    img: ImgSrc,
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
}

const BUTTONS_NAME = ['O mnie','Lista postaci', 'ToDo','Kontakt']



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

    const BUTTONS_ITEM = BUTTONS_NAME.map((el,index)=>{
        return(
            <Item key={index} onClick={changePage}>{el}</Item>
        )
    })

    const pageSetter = () => {
    switch(page){
        case 'O mnie' :
            return(<AboutMe person = {PERSON} logoChanger={logoChanger} logo={logo}/>)
            break;
        case 'Lista postaci':
            return(<CharacterList/>)
            break;
        case 'ToDo':
            return(<ToDo logoChanger={logoChanger} logo={logo}/>)
            break;
        case 'Kontakt':
            return(<Contact/>)
            break;
    }
}

    return(
        <WrapperApp>
            <WrapperMenu>
                <Logo>{logo}</Logo>
                <Links>
                {BUTTONS_ITEM}
                </Links>
            </WrapperMenu>
            <WrapperPage>
                {pageSetter()}
            </WrapperPage>
        </WrapperApp>
        
    )
}

export default Menu