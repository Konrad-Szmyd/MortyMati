import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChangeLogo from "./ChangeLogo";

const Wraper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin: 1rem;

    .Lists{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }

    p{
        cursor:pointer;
    }
`

const ToDo = ({logoChanger,logo}) =>{
    const [value,setValue] = useState([])
    const [task,setTask] = useState([])
    let counter = 1

    const loadValue = (e) =>{
        setValue(e.target.value)
    }

    const show = ()=>{
        setTask([...task,value])
    }

    const deleteItem = (e) =>{
        const newList = task.filter((el)=>{
            return(el != e.target.innerText)
        })
        setTask(newList)
    }

    const fullList = task.map((el)=>{
        return(
            <p key={el} onClick={deleteItem}>{el}</p>
        )
    })

    // const changeLogo = () =>{
    //     logo == 'LOGO' ? logoChanger('New logo') : logoChanger('LOGO')
    // }

    return(
        <Wraper>
            <div className="Buttons">
                <input onChange={loadValue}></input>
                <button onClick={show}>Dodaj</button>
            </div>
            <div className="Lists">
            {fullList}
            </div>
            <div>
            <ChangeLogo logoChanger={logoChanger} logo={logo}/>
            </div>
        </Wraper>
    )
}

export default ToDo