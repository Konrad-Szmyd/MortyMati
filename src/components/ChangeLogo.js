import React from "react";

const ChangeLogo = ({logoChanger,logo}) => {

    const changeLogo = () =>{
        logoChanger(logo === 'LOGO' ? 'New logo' : "LOGO")
    }

    return (<div>
        <button onClick={changeLogo}>ChangeLogo</button>
        </div>)
}

export default ChangeLogo