import React from "react";

const ChangeLogo = ({logoChanger,logo}) => {

    const changeLogo = () =>{
        logo == 'LOGO' ? logoChanger('New logo') : logoChanger('LOGO')
    }

    return (<div>
        <button onClick={changeLogo}>ChangeLogo</button>
        </div>)
}

export default ChangeLogo