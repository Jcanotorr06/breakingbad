import React from 'react'
import spinner from "../img/spinner.gif";
export const Spinner = () => {
    return (
        <div>
             <img src={spinner} alt="spinner" style={{ width: '200px', margin:'auto', display:'block' }}/>
        </div>
    )
}