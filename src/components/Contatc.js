import { useState } from "react";
import styled from "styled-components";
import ContactData from "./ContactData";

const Wrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-end;
`

const Contact = () =>{
    const [email,setEmail] = useState('')
    const [text,setText] = useState('')
    const [fullState,setFullState] = useState('')

    const setEmailData = (e) =>{
        setEmail(e.target.value)
    }
    const setTextData = (e) =>{
        setText(e.target.value)
    }

    const showState = () =>{
        const state = {
            email: email,
            text: text
        }
        setFullState(state)
    }

    return(
        <Wrapper>
            <div>
                <span>Email</span><input onChange={setEmailData} />
            </div>
            <div>
                <span>Text</span><input onChange={setTextData} />
            </div>
            <button onClick={showState}>Wyslij</button>
            {fullState != '' && <ContactData state = {fullState} />}
        </Wrapper>
        
    )
}

export default Contact