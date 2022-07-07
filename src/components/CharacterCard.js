import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    width:1000px;
`

const Card = styled.div`
    display:flex;
    width:450px;
    justify-content:space-around;
    padding:0.5rem;
    margin:1rem;
    border:1px solid #000000;
    border-radius:1rem;

    .Detail{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`

const CharacterCard = ({ details }) => {
    const { id, name, img, species } = details
    return (
        <Wrapper>
            <Card>
                <div className="Photo">
                    <img src={img} width='150px' alt="Character photo" />
                </div>
                <div className="Detail">
                    <p>Name : {name}</p>
                    <p>Species : {species}</p>
                </div>
            </Card>
        </Wrapper>
    )
}

export default CharacterCard