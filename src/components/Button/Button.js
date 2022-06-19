import React from 'react';
import  './button.scss';

const Button = (props) =>  {
    return (
        <div className='button-container' 
            style={props.color=="white"?{backgroundColor:"white"}:{backgroundColor:"#6D6BDE"}}
        >
            <p style={props.color=="white"?{color:"black"}:{color:"white"}}>
                {props.name}
            </p>
        </div>
    );
}

export default Button;