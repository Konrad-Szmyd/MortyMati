import { useState } from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:1rem;
`

const AboutMe = ({person, logo, logoChanger}) =>{
    const {name,surname,img,detail} = person
    const [value,setValue] = useState('')

    const setInputValue = (e) => {
        setValue(e.target.value)
    }
    const setNewLogo = () => {
        logoChanger(logo+value)
    }

    return(
        <Wrapper>
            <img src={img} alt="My picture" />
            <h2>{name} {surname}</h2>
            <p>{detail}</p>
            <div>
                <span>Add text to the logo</span><input onChange={setInputValue}/>
                <button onClick={setNewLogo}>Set</button>
            </div>
        </Wrapper>
    )
}

export default AboutMe